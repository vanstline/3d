import { defineConfig } from 'umi';
import { resolve } from 'path';
import utils from './utils';
import routers from '../src/routers/index';
let libtransForm: any = null;
let config = require(utils.getEvnFilePath());

export default defineConfig({
    favicon: '/favicon.ico',
    title: config.systemName || '',
    // mfsu: {},
    hash: true,
    devtool: false,
    fastRefresh: {},
    webpack5: {},
    outputPath: `./dist`,
    plugins: [resolve(__dirname, './dev-scripts.js')],
    lessLoader: {
        modifyVars: {
            hack: `true; @import "~@/assets/less/base.less";`
        }
    },
    alias: {
        components: resolve(__dirname, './src/components'),
        utils: resolve(__dirname, './src/utils'),
        assets: resolve(__dirname, './src/assets'),
        pages: resolve(__dirname, './src/pages'),
        env: utils.getEvnFilePath()
    },
    extraBabelPlugins: [
        [
            'transform-modules',
            {
                'ecoplants-lib': {
                    transform: function (...args: any[]) {
                        console.log(...args, 'ecoplants-lib/transform');
                        if (!libtransForm) {
                            libtransForm = require('ecoplants-lib/transform')(true);
                        }
                        const res = libtransForm(...args);
                        console.log(res);
                        return res;
                    },
                    preventFullImport: true,
                    style: false
                }
            }
        ]
    ],
    nodeModulesTransform: { type: 'none' },
    routes: routers,
    chainWebpack(config) {
        config.module // 配置 file-loader
            .rule('ttf')
            .test(/.ttf$/)
            .use('file-loader')
            .loader('file-loader');
        config.module
            .rule('eslint')
            .before('js')
            .test(/\.(js|mjs|jsx|ts|tsx)$/)
            .pre()
            .include.add(resolve(__dirname, '../', './src'))
            .end()
            .use('eslint-loader')
            .loader('eslint-loader')
            .tap((options: any) => {
                return {
                    ...options,
                    ignore: true, // 启用 .eslintignore
                    formatter: require('eslint-friendly-formatter')
                    // emitWarning: true
                };
            })
            .end();
        config.plugin('moment2dayjs').use('antd-dayjs-webpack-plugin');

        config.resolve.alias.set('env$', utils.getEvnFilePath());
    },
    // //以下为配置项
    qiankun: {
        slave: {}
    },
    devServer: {
        port: 7070,
        headers: {
            //  允许跨域访问子应用页面
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'POST, GET, PATCH, DELETE, PUT',
            'Access-Control-Allow-Headers':
                'Origin, X-Requested-With, Content-Type, Accept, Referer, sec-ch-ua, sec-ch-ua-mobile, sec-ch-ua-platform, User-Agent'
        },
        host: 'localhost',
        proxy: {
            '/dev-server': {}
        }
    }
});
