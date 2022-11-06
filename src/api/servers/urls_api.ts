/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-useless-constructor */
import GmpClient from '@/api/client/gmp_client';
import {
    GetResourceUrlInfoRequest,
    GetResourceUrlInfoResponse,
    CreateResourceUrlRequest,
    CreateResourceUrlResponse,
    UpdateResourceUrlRequest,
    ListResourceUrlRequest,
    ListResourceUrlResponse,
    DeleteResourceUrlRequest,
    ValidResourceUrlRequest,
    ValidResourceUrlResponse,
    EmptyResponse
} from '@/api/protos/backend_api_pb';

export namespace GetResourceUrlInfo {
    export type In = Partial<GetResourceUrlInfoRequest.AsObject>;
    export type Out = Partial<GetResourceUrlInfoResponse.AsObject>;
}

export namespace CreateResourceUrl {
    export type In = Partial<CreateResourceUrlRequest.AsObject>;
    export type Out = Partial<CreateResourceUrlResponse.AsObject>;
}

export namespace UpdateResourceUrl {
    export type In = Partial<UpdateResourceUrlRequest.AsObject>;
    export type Out = Partial<EmptyResponse.AsObject>;
}

export namespace ListResourceUrl {
    export type In = Partial<ListResourceUrlRequest.AsObject>;
    export type Out = Partial<ListResourceUrlResponse.AsObject>;
}

export namespace DeleteResourceUrl {
    export type In = Partial<DeleteResourceUrlRequest.AsObject>;
    export type Out = Partial<EmptyResponse.AsObject>;
}

export namespace ValidResourceUrl {
    export type In = Partial<ValidResourceUrlRequest.AsObject>;
    export type Out = Partial<ValidResourceUrlResponse.AsObject>;
}

/**
 * Urls
 */
class UrlsAPI extends GmpClient {
    /**
     * Creates an instance of UrlsAPI.
     * @memberof UrlsAPI
     */
    constructor() {
        super();
    }

    /**
     * 资源生成url
     *
     * @param {*} params 参数
     * @return {Promise<CreateResourceUrl.Out>}  {Promise<ListResourceUrl.Out>}
     */
    CreateResourceUrl(params: CreateResourceUrl.In): Promise<CreateResourceUrl.Out> {
        return this.fetchData('createResourceUrl', {
            data: params
        });
    }

    /**
     * 资源url详情
     *
     * @param {*} params 参数
     * @return {*}
     */
    GetResourceUrlInfo(params: GetResourceUrlInfo.In) {
        return this.fetchData('getResourceUrlInfo', {
            data: params
        });
    }

    /**
     * 更新url
     *
     * @param {*} params 参数
     * @return {*}
     */
    UpdateResourceUrl(params: UpdateResourceUrl.In) {
        return this.fetchData('updateResourceUrl', {
            data: params
        });
    }

    /**
     * 资源生url列表
     *
     * @param {ListResourceUrl.In} params 参数
     * @return {Promise<ListResourceUrl.Out>}  {Promise<ListResourceUrl.Out>}
     * @memberof UrlsAPI
     */
    ListResourceUrl(params: ListResourceUrl.In): Promise<ListResourceUrl.Out> {
        return this.fetchData('listResourceUrl', {
            data: params
        });
    }

    /**
     * 删除
     *
     * @param {*} params 参数
     * @return {*}
     */
    DeleteResourceUrl(params: DeleteResourceUrl.In) {
        return this.fetchData('deleteResourceUrl', {
            data: params
        });
    }

    /**
     * 验证生成url
     *
     * @param {ValidResourceUrl.In} params 参数
     * @return {Promise<ValidResourceUrl.Out>}  {Promise<ValidResourceUrl.Out>}
     * @memberof UrlsAPI
     */
    ValidResourceUrl(params: ValidResourceUrl.In): Promise<ValidResourceUrl.Out> {
        return this.fetchData('validResourceUrl', {
            data: params
        });
    }
}
export default new UrlsAPI();
