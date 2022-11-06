/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef, CSSProperties } from 'react';
import { Form, Select } from 'antd';
import Icon, { CloseOutlined, FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { ReactComponent as desc } from '@/assets/svg/desc.svg';
import SceneComponent from '@/common/scene';

import './index.less';

interface IData {
    name: string;
    baseUrl: string;
    fileName: string;
    size: { [x: string]: any };
    desc?: string;
}

interface IProps {
    list: IData[]
    canOperation?: boolean
    clientInfos?: [number, number]
    sceneIndex?: number
    hideSide?: boolean
    showStand?: boolean
    bg?: string
}

const root = 'imp-3d';
const { Item } = Form;
const { Option } = Select;
const pixelArr = ['2k', '1024', '512'];

/**
 * 3DView
 *
 * @param {*} props props
 * @return {*}
 */
const Index: React.FC<IProps> = (props) => {
    const {
        clientInfos = [1024, 768], list, sceneIndex = 0, hideSide, bg, showStand
    } = props;

    const hasBg = bg === null || bg;

    const scene = useRef<SceneComponent>() as any;
    const container = useRef() as any;
    const [fullScreen, setFullScreen] = useState(false);
    const [drawerShow, setDrawerShow] = useState(false);
    const [model, setModel] = useState(0);
    const [pixel, setPixel] = useState(0);
    const [showPixel, setShowPixel] = useState(false);

    useEffect(() => {
        if (list.length) {
            setShowPixel(list[model].size && typeof list[model].size === 'object');
            scene?.current?.loadObjModel(list[model], pixel);
        }
    }, [model, pixel, list, scene]);

    const style: CSSProperties = hasBg ? { background: bg || '#000' } : {};

    /**
     * handleFullScreen
     *
     */
    const handleSetFullScreen = async () => {
        fullScreen ? document.exitFullscreen() : container.current.requestFullscreen();
    };

    if (container.current) {
        container.current.onfullscreenchange = function (event: any) {
            const sameWidth = window.screen.width === window.innerWidth;
            const sameHeight = window.screen.height === window.innerHeight;
            setFullScreen(sameWidth && sameHeight);
        };
    }

    return (
        <div
            ref={container}
            className={`${root}-pj-content`}
            style={{ width: clientInfos[0], height: clientInfos[1] }}
        >
            <div className={clsx(`${root}-pj-view`)} style={style}>
                <SceneComponent clientInfos={clientInfos} ref={scene} sceneIndex={sceneIndex} showStand={showStand !== undefined} />
            </div>
            <div className={`${root}-pj-operations`}>
                <span className={`${root}-pj-operations-fullScreen`} onClick={handleSetFullScreen}>
                    { fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined /> }
                </span>
            </div>
            {!hideSide && !drawerShow && (
                <div className={`${root}-view-btn`} onClick={() => list && setDrawerShow(!drawerShow)}>
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
                        {list.length > 1 && (
                            <Item label="选择模型">
                                <Select value={model} onChange={setModel}>
                                    {list.map((item, index) => (
                                        <Option key={index} value={index}>
                                            {item.name}
                                        </Option>
                                    ))}
                                </Select>
                            </Item>
                        )}
                        {!!showPixel && (
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
    );
};

export default Index;
