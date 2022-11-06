import { HttpClient } from 'ecoplants-lib';
import env from 'env';
import userConfig from './common/user/User';

HttpClient.setConfig({
    requestConfig: {
        headers: {
            'Content-Type': 'application/grpc-web-text+proto',
            AppID: '1000000'
        }
    },
    ApiURL: env.serveUrls,
    devtoolOption: env.devtoolOption
});
/* eslint-disable import/prefer-default-export */
/**
 * qiankun
 */
export const qiankun = {
    /**
     *应用加载之前
     * @param {*} props any
     */
    async bootstrap() {
        const user = userConfig();
        HttpClient.setConfig({
            /**
             * 发送前处理回调
             *
             * @param {*} {
             *                 options,
             *                 requestConfig
             *             }
             * @return {*}
             */
            sendBefore({ options, requestConfig }: any) {
                requestConfig = requestConfig || {};
                return new Promise((resolve) => {
                    user.getUserInfo().then((userInfo) => {
                        userInfo = userInfo || {};
                        const headers = { ...requestConfig.headers || {},
                            token: userInfo.token,
                            Authentication: userInfo.token };
                        requestConfig.headers = headers;
                        resolve({
                            ...options,
                            requestConfig
                        });
                    });
                });
            }
        });
    },

    /**
     *应用 render 之前触发
     * @param {*} props any
     */
    async mount() {
        // console.log('app2 mount');
    },
    /**
     *应用卸载之后触发
     * @param {*} props any
     */
    async unmount() {
        // console.log('app2 unmount');
    }
};
