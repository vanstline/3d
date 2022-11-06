import * as grpcWeb from 'grpc-web';

import * as backend_api_pb from './backend_api_pb';


export class Interactive3d_apiServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listResources(
    request: backend_api_pb.ListResourcesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: backend_api_pb.ListResourcesResponse) => void
  ): grpcWeb.ClientReadableStream<backend_api_pb.ListResourcesResponse>;

  createResource(
    request: backend_api_pb.CreateResourceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: backend_api_pb.CreateResourceResponse) => void
  ): grpcWeb.ClientReadableStream<backend_api_pb.CreateResourceResponse>;

  getResourceInfo(
    request: backend_api_pb.GetResourceInfoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: backend_api_pb.GetResourceInfoResponse) => void
  ): grpcWeb.ClientReadableStream<backend_api_pb.GetResourceInfoResponse>;

  deleteResourceByModelId(
    request: backend_api_pb.DeleteResourceByModelIdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: backend_api_pb.EmptyResponse) => void
  ): grpcWeb.ClientReadableStream<backend_api_pb.EmptyResponse>;

  deleteBatchAssets(
    request: backend_api_pb.DeleteBatchAssetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: backend_api_pb.EmptyResponse) => void
  ): grpcWeb.ClientReadableStream<backend_api_pb.EmptyResponse>;

  updateResource(
    request: backend_api_pb.UpdateResourceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: backend_api_pb.EmptyResponse) => void
  ): grpcWeb.ClientReadableStream<backend_api_pb.EmptyResponse>;

  createResourceUrl(
    request: backend_api_pb.CreateResourceUrlRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: backend_api_pb.CreateResourceUrlResponse) => void
  ): grpcWeb.ClientReadableStream<backend_api_pb.CreateResourceUrlResponse>;

  getResourceUrlInfo(
    request: backend_api_pb.GetResourceUrlInfoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: backend_api_pb.GetResourceUrlInfoResponse) => void
  ): grpcWeb.ClientReadableStream<backend_api_pb.GetResourceUrlInfoResponse>;

  updateResourceUrl(
    request: backend_api_pb.UpdateResourceUrlRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: backend_api_pb.EmptyResponse) => void
  ): grpcWeb.ClientReadableStream<backend_api_pb.EmptyResponse>;

  listResourceUrl(
    request: backend_api_pb.ListResourceUrlRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: backend_api_pb.ListResourceUrlResponse) => void
  ): grpcWeb.ClientReadableStream<backend_api_pb.ListResourceUrlResponse>;

  deleteResourceUrl(
    request: backend_api_pb.DeleteResourceUrlRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: backend_api_pb.EmptyResponse) => void
  ): grpcWeb.ClientReadableStream<backend_api_pb.EmptyResponse>;

  validResourceUrl(
    request: backend_api_pb.ValidResourceUrlRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: backend_api_pb.ValidResourceUrlResponse) => void
  ): grpcWeb.ClientReadableStream<backend_api_pb.ValidResourceUrlResponse>;

  listAssets(
    request: backend_api_pb.ListAssetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: backend_api_pb.ListAssetsResponse) => void
  ): grpcWeb.ClientReadableStream<backend_api_pb.ListAssetsResponse>;

  listCategory(
    request: backend_api_pb.ListCategoryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: backend_api_pb.ListCategoryResponse) => void
  ): grpcWeb.ClientReadableStream<backend_api_pb.ListCategoryResponse>;

  exportAssetById(
    request: backend_api_pb.ExportAssetByIdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: backend_api_pb.EmptyResponse) => void
  ): grpcWeb.ClientReadableStream<backend_api_pb.EmptyResponse>;

  listAssetTypes(
    request: backend_api_pb.ListAssetTypesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: backend_api_pb.ListAssetTypesResponse) => void
  ): grpcWeb.ClientReadableStream<backend_api_pb.ListAssetTypesResponse>;

  listAssetLabels(
    request: backend_api_pb.ListAssetLabelsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: backend_api_pb.ListAssetLabelsResponse) => void
  ): grpcWeb.ClientReadableStream<backend_api_pb.ListAssetLabelsResponse>;

  getAssetLabelsByIds(
    request: backend_api_pb.GetAssetLabelsByIdsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: backend_api_pb.GetAssetLabelsByIdsResponse) => void
  ): grpcWeb.ClientReadableStream<backend_api_pb.GetAssetLabelsByIdsResponse>;

}

export class Interactive3d_apiServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listResources(
    request: backend_api_pb.ListResourcesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<backend_api_pb.ListResourcesResponse>;

  createResource(
    request: backend_api_pb.CreateResourceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<backend_api_pb.CreateResourceResponse>;

  getResourceInfo(
    request: backend_api_pb.GetResourceInfoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<backend_api_pb.GetResourceInfoResponse>;

  deleteResourceByModelId(
    request: backend_api_pb.DeleteResourceByModelIdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<backend_api_pb.EmptyResponse>;

  deleteBatchAssets(
    request: backend_api_pb.DeleteBatchAssetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<backend_api_pb.EmptyResponse>;

  updateResource(
    request: backend_api_pb.UpdateResourceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<backend_api_pb.EmptyResponse>;

  createResourceUrl(
    request: backend_api_pb.CreateResourceUrlRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<backend_api_pb.CreateResourceUrlResponse>;

  getResourceUrlInfo(
    request: backend_api_pb.GetResourceUrlInfoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<backend_api_pb.GetResourceUrlInfoResponse>;

  updateResourceUrl(
    request: backend_api_pb.UpdateResourceUrlRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<backend_api_pb.EmptyResponse>;

  listResourceUrl(
    request: backend_api_pb.ListResourceUrlRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<backend_api_pb.ListResourceUrlResponse>;

  deleteResourceUrl(
    request: backend_api_pb.DeleteResourceUrlRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<backend_api_pb.EmptyResponse>;

  validResourceUrl(
    request: backend_api_pb.ValidResourceUrlRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<backend_api_pb.ValidResourceUrlResponse>;

  listAssets(
    request: backend_api_pb.ListAssetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<backend_api_pb.ListAssetsResponse>;

  listCategory(
    request: backend_api_pb.ListCategoryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<backend_api_pb.ListCategoryResponse>;

  exportAssetById(
    request: backend_api_pb.ExportAssetByIdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<backend_api_pb.EmptyResponse>;

  listAssetTypes(
    request: backend_api_pb.ListAssetTypesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<backend_api_pb.ListAssetTypesResponse>;

  listAssetLabels(
    request: backend_api_pb.ListAssetLabelsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<backend_api_pb.ListAssetLabelsResponse>;

  getAssetLabelsByIds(
    request: backend_api_pb.GetAssetLabelsByIdsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<backend_api_pb.GetAssetLabelsByIdsResponse>;

}

