/* eslint-disable no-unused-expressions */
/* eslint-disable arrow-parens  */
/* eslint-disable consistent-return  */
import { useState, useLayoutEffect } from 'react';
import { useLocation } from 'umi';
import { message, Modal, Input } from 'antd';
import dayjs from 'dayjs';
import D3View from '@/components/3dview';
import UrlsAPI from '@/api/servers/urls_api';

// const src = 'https://pre-imp-1310704612.cos.ap-nanjing.myqcloud.com/file/test/eb88cbcf831a23d452fcfe80f81e2a0a.stl'
// name: string;
// baseUrl: string;
// fileName: string;
// size: { [x: string]: any };
// desc?: string;

/**
 * Index
 *
 * @return {*}
 */
const Index = () => {
    const [data, setData] = useState<any>();
    const [isVisible, setVisible] = useState(false);
    const [value, setValue] = useState('');
    const params = useLocation();
    const { query = {} } = params as any;
    const { name, desc, key, scene } = query;
    const size = query.size ? JSON.parse(query.size) : null;
    const screen = query.isFull !== undefined ? JSON.stringify([window.innerWidth, window.innerHeight]) : query.screens || '[1024, 768]';
    const clientInfos = JSON.parse(screen);

    /**
     * disposeSrc
     * @param {string} src src
     */
    const disposeSrc = (src: string) => {
        const filePaths = src.split('/');
        const fileInfo = filePaths.pop();

        const baseUrl = `${filePaths.join('/')}/`;
        const fileName = fileInfo?.split('.')[0];
        const type = fileInfo?.split('.')[1];

        const currentData = {
            baseUrl,
            fileName,
            name,
            size,
            type,
            desc,
            scene
        };
        setData(currentData);
    };

    /**
     * checkUrls
     * @param {string} url url
     * @param {boolean} flag flag
     */
    const checkUrls = async (url: string, flag: boolean) => {
        const urlParams: any = { url };
        if (flag) {
            if (!value) {
                return message.info('请输入验证码！');
            }
            urlParams.pwd = value;
        }
        setVisible(false);
        try {
            const res = await UrlsAPI.ValidResourceUrl(urlParams);
            if (!res.valid) {
                message.warning('资源无法访问');
            } else {
                disposeSrc(res.modelUrl as string);
            }
        } catch (error: any) {
            message.error(error.message);
        }
    };

    /**
     * checkIsPwd
     * @param {string} url url
     */
    const checkIsPwd = async (url: string) => {
        try {
            const res = await UrlsAPI.GetResourceUrlInfo({ url });
            const { info } = res;
            const now = dayjs().format('YYYY-MM-DD HH:mm:ss');
            if (dayjs(now).unix() > dayjs(info?.endTime).unix()) {
                return message.error('链接已失效～～～');
            }
            if (info?.isPwd) {
                setVisible(true);
            } else {
                checkUrls(url, false);
            }
        } catch (error: any) {
            message.error(error.message);
        }
    };

    useLayoutEffect(() => {
        key ? checkIsPwd(key) : disposeSrc(query.src);
    }, []);

    // if (!data) {
    //     return null;
    // }

    return (
        <div>
            {data && <D3View list={[data]} {...query} clientInfos={clientInfos} canOperation={false} hideSide sceneIndex={scene} />}
            <Modal
                visible={isVisible}
                title="请输入验证码"
                okText="保存"
                cancelText="取消"
                onCancel={() => setVisible(false)}
                onOk={() => checkUrls(key, true)}
            >
                <Input
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </Modal>
        </div>
    );
};

export default Index;
