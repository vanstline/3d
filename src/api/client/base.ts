import { HttpClient } from 'ecoplants-lib';
import { Interactive3d_apiServicePromiseClient } from '@/api/protos/backend_api_grpc_web_pb';

/**
 * GRPC 基类
 *
 * @class BaseGRPC
 * @extends {(HttpClient<typeof ContentAPI, typeof Interactive3d_apiServicePromiseClient & IGrpcConstructor>)}
 */
class BaseGRPC<T> extends HttpClient<T, typeof Interactive3d_apiServicePromiseClient & IGrpcConstructor> {
    /**
     * Creates an instance of BaseGRPC.
     * @param {*} services T
     * @memberof BaseGRPC
     */
    constructor(services: T) {
        super({
            GrpcClient: <IGrpcConstructor>Interactive3d_apiServicePromiseClient,
            services
        });
    }
}

export default BaseGRPC;
