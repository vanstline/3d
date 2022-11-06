module.exports = {
    ssn: 'imp',
    systemName: 'IMP 3DInteractive', // 系统名称
    envName: 'prod', // 生产
    serveUrls: 'https://api.epverse.net',
    avatarUrls: 'https://epworks',
    uploadUrls: 'https://api.epverse.net',
    appVersion: '1.0.0',
    devtoolOption: () => {
        if (window.__GRPCWEB_DEVTOOLS__) {
            const devInterceptors = window.__GRPCWEB_DEVTOOLS__ || (() => {});
            const { devToolsUnaryInterceptor } = devInterceptors();
            return {
                unaryInterceptors: [devToolsUnaryInterceptor]
            };
        } else {
            return null;
        };
    }
};
