/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-underscore-dangle */
import { getCookie } from 'utils';
import * as epWorkWebPB from '../protos/backend_api_grpc_web_pb';
import env from "env";

const config = {
    AppID: 'IMP',
    ApiURL: env.serveUrls,
    DefaultContentType: 'application/grpc-web-text+proto'
};

const SimpleUnaryInterceptor = function () {};

SimpleUnaryInterceptor.prototype.intercept = function (request, invoker) {
    request.getMetadata()['Content-Type'] = config.DefaultContentType;
    request.getMetadata().AppID = config.AppID;
    request.getMetadata().Authentication = getCookie('token') ?? '';
    request.getMetadata().CompanyID = getCookie('expired') ?? 0;
    return new Promise((resolve, reject) => {
        invoker(request)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const opts = { unaryInterceptors: [new SimpleUnaryInterceptor()] };

if (process.env.DEVTOOLS && window.__GRPCWEB_DEVTOOLS__) {
    const devInterceptors = window.__GRPCWEB_DEVTOOLS__ || (() => {});
    const { devToolsUnaryInterceptor } = devInterceptors();
    opts.unaryInterceptors.push(devToolsUnaryInterceptor);
}

const epWorkClient = new epWorkWebPB.EpWorksApiServicePromiseClient(config.ApiURL, null, opts);
export { epWorkClient };
