/* eslint-disable max-len */
import { useState, useEffect, useRef } from 'react';
import { Select } from 'antd';
import Icon, { InfoCircleOutlined, CloseOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import SceneComponent from '@/common/scene';
import useUA from '@/hooks/useUA';
import { ReactComponent as packCurrent } from '@/assets/svg/packCurrent.svg';
import './index.less';

interface IData {
    name: string;
    baseUrl: string;
    fileName: string;
    size: { [x: string]: any };
    desc?: string;
}

const root = 'imp-3d-mobile';

const { Option } = Select;
const pixelArr = ['2k', '1024', '512'];
const color = '#c6c6c6';

/**
 * App
 *
 * @return {*}
 */
const Index = () => {
    const scene = useRef<SceneComponent>() as any;
    const viewBoxRef = useRef<HTMLDivElement>(null);
    const [clientInfos, setClientInfos] = useState([window.innerWidth, window.innerHeight - 80]);
    const [list, setList] = useState<IData[]>([]);
    const [model, setModel] = useState(0);
    const [pixel, setPixel] = useState(0);
    const [showDesc, setShowDesc] = useState(false);
    const [showPixel, setShowPixel] = useState(false);

    useUA({
        type: 'PC',
        fn: () => window.location.replace('/')
    });

    /**
     * getRequest
     *
     * @param {*} value value
     * @return {*}
     */
    const getRequest = (value: any) => {
        const url = decodeURI(window.location.search);
        const object = {};
        if (url.indexOf('?') != -1) {
            const str = url.substring(1);
            const strs = str.split('&');
            for (let i = 0; i < strs.length; i++) {
                object[strs[i].split('=')[0]] = strs[i].split('=')[1];
            }
        }
        return object[value];
    };

    /**
     * parseConfigData
     *
     * @param {*} obj obj
     */
    const parseConfigData = (obj: any) => {
        setList(obj.data);
        setShowPixel(typeof obj.data[pixel].size === 'object');
        scene?.current?.loadObjModel(obj.data[pixel]);
    };

    /**
     * loadConfig
     *
     * @param {string} configName configName
     */
    const loadConfig = (configName: string) => {
        if (configName === '') {
            configName = 'default';
        }
        const url: string = `assets/config/${configName}.json`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                parseConfigData(data);
            })
            .catch(() => {
                if (configName != 'default') {
                    loadConfig('default');
                }
            });
    };

    /**
     * getContainerBounding
     *
     */
    const getContainerBounding = () => {
        if (viewBoxRef.current) {
            const { clientWidth = 0, clientHeight = 0 } = viewBoxRef.current;
            setClientInfos([clientWidth, clientHeight]);
        }
    };

    useEffect(() => {
        getContainerBounding();
        loadConfig(getRequest('config') || '');
    }, []);

    useEffect(() => {
        if (list.length) {
            setShowPixel(typeof list[model].size === 'object');
            scene?.current?.loadObjModel(list[model], pixel);
        }
    }, [model, pixel, list]);

    return (
        <div className={`${root}-wrap`}>
            <div className={`${root}-header`}>
                <Icon component={packCurrent} style={{ color }} />
                &nbsp;&nbsp;
                <span>{list[model]?.name || '3D Interactive'}</span>
            </div>
            <div className={`${root}-form`}>
                <div className={clsx(`${root}-form-item`, !showPixel && `${root}-form-item-only`)}>
                    模型&nbsp;&nbsp;
                    <Select value={model} onChange={setModel}>
                        {list.map((item, index) => (
                            <Option key={index} value={index}>
                                {item.name}
                            </Option>
                        ))}
                    </Select>
                </div>
                {showPixel && (
                    <div className={`${root}-form-item`}>
                        像素&nbsp;&nbsp;
                        <Select value={pixel} onChange={setPixel}>
                            {pixelArr.map((item, index) => (
                                <Option key={index} value={index}>
                                    {item}
                                </Option>
                            ))}
                        </Select>
                    </div>
                )}
            </div>
            <div ref={viewBoxRef} className={clsx(`${root}-view`)}>
                {!!clientInfos[0] && !!clientInfos[1] && <SceneComponent clientInfos={clientInfos} ref={scene} />}
            </div>

            {showDesc ? (
                <div className={`${root}-desc`}>
                    <div className={`${root}-desc-header`}>
                        <div className={`${root}-desc-title`}>{list[model]?.name}</div>
                        <div className={`${root}-desc-assets`}>
                            <span>
                                资产包大小:&nbsp;&nbsp;
                                {list[model]?.size?.[pixelArr[pixel]] || list[model]?.size || 0}
                                &nbsp;MB
                            </span>
                            <span className={`${root}-desc-close`} onClick={() => setShowDesc(!showDesc)}>
                                <CloseOutlined style={{ fontSize: 14, color }} />
                            </span>
                        </div>
                    </div>
                    <div className={`${root}-desc-text`}>{list[model]?.desc}</div>
                </div>
            ) : (
                <div className={`${root}-desc-btn`} onClick={() => setShowDesc(!showDesc)}>
                    <InfoCircleOutlined style={{ fontSize: 24 }} />
                </div>
            )}
        </div>
    );
};

export default Index;
