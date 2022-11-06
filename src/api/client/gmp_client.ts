import BaseGRPC from '@/api/client/base';
import * as ContentAPI from '@/api/protos/backend_api_pb';

/**
 * GmpClient
 *
 * @class TasktCase
 * @extends {(HttpClient<typeof ContentAPI, typeof ImpBackendApiServicePromiseClient & IGrpcConstructor>)}
 */
class GmpClient extends BaseGRPC<typeof ContentAPI> {
    /**
     * 请求头初始化
     */
    constructor() {
        super(ContentAPI);
    }
}
export default GmpClient;
