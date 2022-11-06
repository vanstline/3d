import { useState, useEffect, useRef } from 'react';
import { Form, Select } from 'antd';
import SceneComponent from '@/pages/scene';
import './render.less';
import 'antd/dist/antd.css';

interface IData {
    name: string;
    baseUrl: string;
    fileName: string;
    size: { [x: string]: any };
}

const { Item } = Form;
const { Option } = Select;
const pixelArr = ['2k', '1024', '512'];

/**
 * Render
 *
 * @return {*}
 */
const Render: React.FC<any> = () => {
    const scene = useRef<SceneComponent>() as any;
    const [list, setList] = useState<IData[]>([]);
    const [model, setModel] = useState(0);
    const [pixel, setPixel] = useState(0);

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
        scene?.current?.loadObjModel(obj.data[0]?.baseUrl, obj.data[0]?.fileName);
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

    useEffect(() => {
        loadConfig(getRequest('config') || '');
    }, []);

    useEffect(() => {
        if (list.length) {
            scene?.current?.loadObjModel(list[model].baseUrl, list[model].fileName, pixel);
        }
    }, [model, pixel, list]);

    return (
        <div className="imp-container">
            {!!list.length && (
                <div className="imp-tool">
                    <Form layout="inline">
                        <Item label="模型选择">
                            <Select value={model} onChange={setModel}>
                                {list.map((item, index) => (
                                    <Option key={index} value={index}>
                                        {item.name}
                                    </Option>
                                ))}
                            </Select>
                        </Item>
                        <Item label="像素选择">
                            <Select value={pixel} onChange={setPixel}>
                                {pixelArr.map((item, index) => (
                                    <Option key={index} value={index}>
                                        {item}
                                    </Option>
                                ))}
                            </Select>
                        </Item>
                    </Form>
                </div>
            )}
            <SceneComponent ref={scene} />
            <div className="imp-three-mask" />
            {!!list.length && (
                <div className="imp-three-desc">
                    <div>{list[model].name}</div>
                    <div className="imp-three-size">{`Size: ${list[model]?.size?.[pixelArr[pixel]] || 0} MB`}</div>
                </div>
            )}
        </div>
    );
};

export default Render;
