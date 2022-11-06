module.exports = {
    ssn: 'imp',
    systemName: 'IMP 3DInteractive', // 系统名称
    envName: 'staging', // 测试
    serveUrls: 'https://envoy.staging.epverse.net',
    avatarUrls: 'https://epworks',
    uploadUrls: 'http://imp-api.staging.epverse.net',
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
