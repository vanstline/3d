module.exports = {
    ssn: 'imp',
    systemName: 'IMP 3DInteractive', // 系统名称
    envName: 'autopush', // 开发
    serveUrls: 'https://envoy',
    avatarUrls: 'https://epworks',
    uploadUrls: 'https://envoy',
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
