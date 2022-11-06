/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import { Form, Select } from 'antd';
import Icon, { CloseOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { ReactComponent as pack } from '@/assets/svg/pack.svg';
import { ReactComponent as desc } from '@/assets/svg/desc.svg';
import SceneComponent from '@/common/scene';
// import { pathMaps } from '@/common/texture';
// import D3View from '@/components/3dview';
import useUA from '@/hooks/useUA';

import './index.less';

const root = 'imp-3d';
interface IData {
    name: string;
    baseUrl: string;
    fileName: string;
    size: { [x: string]: any };
    desc?: string;
}

const { Item } = Form;
const { Option } = Select;
const pixelArr = ['2k', '1024', '512'];

/**
 * Index
 *
 * @return {*}
 */
const Index = () => {
    const scene = useRef<SceneComponent>() as any;
    const viewBoxRef = useRef<HTMLDivElement>(null);
    const [clientInfos, setClientInfos] = useState<[number, number]>([0, 0]);
    const [drawerShow, setDrawerShow] = useState(false);
    const [list, setList] = useState<IData[]>([]);
    const [model, setModel] = useState(0);
    const [pixel, setPixel] = useState(0);
    const [showPixel, setShowPixel] = useState(false);

    useUA({ type: 'mobile', fn: () => window.location.replace('/mobile') });

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
                <Icon component={pack} />
                &nbsp;&nbsp;
                <span>3D互动</span>
            </div>
            <div className={`${root}-pj-main`}>
                {/* <div className={`${root}-pj-title`}>{list[model]?.name || ''}</div> */}
                {/* <D3View clientInfos={clientInfos} list={list} /> */}
                <div className={`${root}-pj-content`}>
                    <div ref={viewBoxRef} className={clsx(`${root}-pj-view`)}>
                        {!!clientInfos[0] && !!clientInfos[1] && <SceneComponent clientInfos={clientInfos} ref={scene} sceneIndex={4} />}
                    </div>
                    {!drawerShow && (
                        <div className={`${root}-view-btn`} onClick={() => list.length && setDrawerShow(!drawerShow)}>
                            <Icon component={desc} style={{ fontSize: 20 }} />
                        </div>
                    )}
                    <div className={clsx(`${root}-pj-drawer`, { [`${root}-pj-drawer-show`]: drawerShow })}>
                        <div className={clsx(`${root}-pj-drawer-header`)}>
                            <span onClick={() => setDrawerShow(!drawerShow)}>
                                <CloseOutlined style={{ fontSize: 20 }} />
                            </span>
                        </div>
                        <div className={clsx(`${root}-pj-drawer-main`)}>
                            <Form labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} labelAlign="left" colon={false}>
                                <Item label="选择模型">
                                    <Select value={model} onChange={setModel}>
                                        {list.map((item, index) => (
                                            <Option key={index} value={index}>
                                                {item.name}
                                            </Option>
                                        ))}
                                    </Select>
                                </Item>
                                {/* <Item label="选择场景">
                                    <Select value={pixel} onChange={setPixel}>
                                        {pathMaps.map((item, index) => (
                                            <Option key={index} value={index}>
                                                {item}
                                            </Option>
                                        ))}
                                    </Select>
                                </Item> */}
                                {showPixel && (
                                    <Item label="选择像素">
                                        <Select value={pixel} onChange={setPixel}>
                                            {pixelArr.map((item, index) => (
                                                <Option key={index} value={index}>
                                                    {item}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Item>
                                )}
                                <Item label="描述" />
                            </Form>
                        </div>
                        <div className={clsx(`${root}-pj-drawer-footer`)}>
                            资产包大小:&nbsp;&nbsp;
                            {list[model]?.size?.[pixelArr[pixel]] || list[model]?.size || 0}
                            &nbsp;MB
                        </div>
                    </div>
                </div>
                <div className={`${root}-pj-footer`}>所有@copyright 保留和技术由 EcoPlants 2022 提供</div>
            </div>
        </div>
    );
};

export default Index;
