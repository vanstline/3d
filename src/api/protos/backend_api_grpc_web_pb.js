/**
 * @fileoverview gRPC-Web generated client stub for interactive3d_api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.interactive3d_api = require('./backend_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.interactive3d_api.Interactive3d_apiServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.interactive3d_api.Interactive3d_apiServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive3d_api.ListResourcesRequest,
 *   !proto.interactive3d_api.ListResourcesResponse>}
 */
const methodDescriptor_Interactive3d_apiService_ListResources = new grpc.web.MethodDescriptor(
  '/interactive3d_api.Interactive3d_apiService/ListResources',
  grpc.web.MethodType.UNARY,
  proto.interactive3d_api.ListResourcesRequest,
  proto.interactive3d_api.ListResourcesResponse,
  /**
   * @param {!proto.interactive3d_api.ListResourcesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive3d_api.ListResourcesResponse.deserializeBinary
);


/**
 * @param {!proto.interactive3d_api.ListResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.interactive3d_api.ListResourcesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive3d_api.ListResourcesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive3d_api.Interactive3d_apiServiceClient.prototype.listResources =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/ListResources',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_ListResources,
      callback);
};


/**
 * @param {!proto.interactive3d_api.ListResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive3d_api.ListResourcesResponse>}
 *     Promise that resolves to the response
 */
proto.interactive3d_api.Interactive3d_apiServicePromiseClient.prototype.listResources =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/ListResources',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_ListResources);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive3d_api.CreateResourceRequest,
 *   !proto.interactive3d_api.CreateResourceResponse>}
 */
const methodDescriptor_Interactive3d_apiService_CreateResource = new grpc.web.MethodDescriptor(
  '/interactive3d_api.Interactive3d_apiService/CreateResource',
  grpc.web.MethodType.UNARY,
  proto.interactive3d_api.CreateResourceRequest,
  proto.interactive3d_api.CreateResourceResponse,
  /**
   * @param {!proto.interactive3d_api.CreateResourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive3d_api.CreateResourceResponse.deserializeBinary
);


/**
 * @param {!proto.interactive3d_api.CreateResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.interactive3d_api.CreateResourceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive3d_api.CreateResourceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive3d_api.Interactive3d_apiServiceClient.prototype.createResource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/CreateResource',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_CreateResource,
      callback);
};


/**
 * @param {!proto.interactive3d_api.CreateResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive3d_api.CreateResourceResponse>}
 *     Promise that resolves to the response
 */
proto.interactive3d_api.Interactive3d_apiServicePromiseClient.prototype.createResource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/CreateResource',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_CreateResource);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive3d_api.GetResourceInfoRequest,
 *   !proto.interactive3d_api.GetResourceInfoResponse>}
 */
const methodDescriptor_Interactive3d_apiService_GetResourceInfo = new grpc.web.MethodDescriptor(
  '/interactive3d_api.Interactive3d_apiService/GetResourceInfo',
  grpc.web.MethodType.UNARY,
  proto.interactive3d_api.GetResourceInfoRequest,
  proto.interactive3d_api.GetResourceInfoResponse,
  /**
   * @param {!proto.interactive3d_api.GetResourceInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive3d_api.GetResourceInfoResponse.deserializeBinary
);


/**
 * @param {!proto.interactive3d_api.GetResourceInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.interactive3d_api.GetResourceInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive3d_api.GetResourceInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive3d_api.Interactive3d_apiServiceClient.prototype.getResourceInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/GetResourceInfo',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_GetResourceInfo,
      callback);
};


/**
 * @param {!proto.interactive3d_api.GetResourceInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive3d_api.GetResourceInfoResponse>}
 *     Promise that resolves to the response
 */
proto.interactive3d_api.Interactive3d_apiServicePromiseClient.prototype.getResourceInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/GetResourceInfo',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_GetResourceInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive3d_api.DeleteResourceByModelIdRequest,
 *   !proto.interactive3d_api.EmptyResponse>}
 */
const methodDescriptor_Interactive3d_apiService_DeleteResourceByModelId = new grpc.web.MethodDescriptor(
  '/interactive3d_api.Interactive3d_apiService/DeleteResourceByModelId',
  grpc.web.MethodType.UNARY,
  proto.interactive3d_api.DeleteResourceByModelIdRequest,
  proto.interactive3d_api.EmptyResponse,
  /**
   * @param {!proto.interactive3d_api.DeleteResourceByModelIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive3d_api.EmptyResponse.deserializeBinary
);


/**
 * @param {!proto.interactive3d_api.DeleteResourceByModelIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.interactive3d_api.EmptyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive3d_api.EmptyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive3d_api.Interactive3d_apiServiceClient.prototype.deleteResourceByModelId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/DeleteResourceByModelId',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_DeleteResourceByModelId,
      callback);
};


/**
 * @param {!proto.interactive3d_api.DeleteResourceByModelIdRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive3d_api.EmptyResponse>}
 *     Promise that resolves to the response
 */
proto.interactive3d_api.Interactive3d_apiServicePromiseClient.prototype.deleteResourceByModelId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/DeleteResourceByModelId',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_DeleteResourceByModelId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive3d_api.DeleteBatchAssetsRequest,
 *   !proto.interactive3d_api.EmptyResponse>}
 */
const methodDescriptor_Interactive3d_apiService_DeleteBatchAssets = new grpc.web.MethodDescriptor(
  '/interactive3d_api.Interactive3d_apiService/DeleteBatchAssets',
  grpc.web.MethodType.UNARY,
  proto.interactive3d_api.DeleteBatchAssetsRequest,
  proto.interactive3d_api.EmptyResponse,
  /**
   * @param {!proto.interactive3d_api.DeleteBatchAssetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive3d_api.EmptyResponse.deserializeBinary
);


/**
 * @param {!proto.interactive3d_api.DeleteBatchAssetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.interactive3d_api.EmptyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive3d_api.EmptyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive3d_api.Interactive3d_apiServiceClient.prototype.deleteBatchAssets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/DeleteBatchAssets',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_DeleteBatchAssets,
      callback);
};


/**
 * @param {!proto.interactive3d_api.DeleteBatchAssetsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive3d_api.EmptyResponse>}
 *     Promise that resolves to the response
 */
proto.interactive3d_api.Interactive3d_apiServicePromiseClient.prototype.deleteBatchAssets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/DeleteBatchAssets',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_DeleteBatchAssets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive3d_api.UpdateResourceRequest,
 *   !proto.interactive3d_api.EmptyResponse>}
 */
const methodDescriptor_Interactive3d_apiService_UpdateResource = new grpc.web.MethodDescriptor(
  '/interactive3d_api.Interactive3d_apiService/UpdateResource',
  grpc.web.MethodType.UNARY,
  proto.interactive3d_api.UpdateResourceRequest,
  proto.interactive3d_api.EmptyResponse,
  /**
   * @param {!proto.interactive3d_api.UpdateResourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive3d_api.EmptyResponse.deserializeBinary
);


/**
 * @param {!proto.interactive3d_api.UpdateResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.interactive3d_api.EmptyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive3d_api.EmptyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive3d_api.Interactive3d_apiServiceClient.prototype.updateResource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/UpdateResource',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_UpdateResource,
      callback);
};


/**
 * @param {!proto.interactive3d_api.UpdateResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive3d_api.EmptyResponse>}
 *     Promise that resolves to the response
 */
proto.interactive3d_api.Interactive3d_apiServicePromiseClient.prototype.updateResource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/UpdateResource',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_UpdateResource);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive3d_api.CreateResourceUrlRequest,
 *   !proto.interactive3d_api.CreateResourceUrlResponse>}
 */
const methodDescriptor_Interactive3d_apiService_CreateResourceUrl = new grpc.web.MethodDescriptor(
  '/interactive3d_api.Interactive3d_apiService/CreateResourceUrl',
  grpc.web.MethodType.UNARY,
  proto.interactive3d_api.CreateResourceUrlRequest,
  proto.interactive3d_api.CreateResourceUrlResponse,
  /**
   * @param {!proto.interactive3d_api.CreateResourceUrlRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive3d_api.CreateResourceUrlResponse.deserializeBinary
);


/**
 * @param {!proto.interactive3d_api.CreateResourceUrlRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.interactive3d_api.CreateResourceUrlResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive3d_api.CreateResourceUrlResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive3d_api.Interactive3d_apiServiceClient.prototype.createResourceUrl =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/CreateResourceUrl',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_CreateResourceUrl,
      callback);
};


/**
 * @param {!proto.interactive3d_api.CreateResourceUrlRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive3d_api.CreateResourceUrlResponse>}
 *     Promise that resolves to the response
 */
proto.interactive3d_api.Interactive3d_apiServicePromiseClient.prototype.createResourceUrl =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/CreateResourceUrl',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_CreateResourceUrl);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive3d_api.GetResourceUrlInfoRequest,
 *   !proto.interactive3d_api.GetResourceUrlInfoResponse>}
 */
const methodDescriptor_Interactive3d_apiService_GetResourceUrlInfo = new grpc.web.MethodDescriptor(
  '/interactive3d_api.Interactive3d_apiService/GetResourceUrlInfo',
  grpc.web.MethodType.UNARY,
  proto.interactive3d_api.GetResourceUrlInfoRequest,
  proto.interactive3d_api.GetResourceUrlInfoResponse,
  /**
   * @param {!proto.interactive3d_api.GetResourceUrlInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive3d_api.GetResourceUrlInfoResponse.deserializeBinary
);


/**
 * @param {!proto.interactive3d_api.GetResourceUrlInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.interactive3d_api.GetResourceUrlInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive3d_api.GetResourceUrlInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive3d_api.Interactive3d_apiServiceClient.prototype.getResourceUrlInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/GetResourceUrlInfo',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_GetResourceUrlInfo,
      callback);
};


/**
 * @param {!proto.interactive3d_api.GetResourceUrlInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive3d_api.GetResourceUrlInfoResponse>}
 *     Promise that resolves to the response
 */
proto.interactive3d_api.Interactive3d_apiServicePromiseClient.prototype.getResourceUrlInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/GetResourceUrlInfo',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_GetResourceUrlInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive3d_api.UpdateResourceUrlRequest,
 *   !proto.interactive3d_api.EmptyResponse>}
 */
const methodDescriptor_Interactive3d_apiService_UpdateResourceUrl = new grpc.web.MethodDescriptor(
  '/interactive3d_api.Interactive3d_apiService/UpdateResourceUrl',
  grpc.web.MethodType.UNARY,
  proto.interactive3d_api.UpdateResourceUrlRequest,
  proto.interactive3d_api.EmptyResponse,
  /**
   * @param {!proto.interactive3d_api.UpdateResourceUrlRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive3d_api.EmptyResponse.deserializeBinary
);


/**
 * @param {!proto.interactive3d_api.UpdateResourceUrlRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.interactive3d_api.EmptyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive3d_api.EmptyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive3d_api.Interactive3d_apiServiceClient.prototype.updateResourceUrl =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/UpdateResourceUrl',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_UpdateResourceUrl,
      callback);
};


/**
 * @param {!proto.interactive3d_api.UpdateResourceUrlRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive3d_api.EmptyResponse>}
 *     Promise that resolves to the response
 */
proto.interactive3d_api.Interactive3d_apiServicePromiseClient.prototype.updateResourceUrl =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/UpdateResourceUrl',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_UpdateResourceUrl);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive3d_api.ListResourceUrlRequest,
 *   !proto.interactive3d_api.ListResourceUrlResponse>}
 */
const methodDescriptor_Interactive3d_apiService_ListResourceUrl = new grpc.web.MethodDescriptor(
  '/interactive3d_api.Interactive3d_apiService/ListResourceUrl',
  grpc.web.MethodType.UNARY,
  proto.interactive3d_api.ListResourceUrlRequest,
  proto.interactive3d_api.ListResourceUrlResponse,
  /**
   * @param {!proto.interactive3d_api.ListResourceUrlRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive3d_api.ListResourceUrlResponse.deserializeBinary
);


/**
 * @param {!proto.interactive3d_api.ListResourceUrlRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.interactive3d_api.ListResourceUrlResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive3d_api.ListResourceUrlResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive3d_api.Interactive3d_apiServiceClient.prototype.listResourceUrl =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/ListResourceUrl',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_ListResourceUrl,
      callback);
};


/**
 * @param {!proto.interactive3d_api.ListResourceUrlRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive3d_api.ListResourceUrlResponse>}
 *     Promise that resolves to the response
 */
proto.interactive3d_api.Interactive3d_apiServicePromiseClient.prototype.listResourceUrl =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/ListResourceUrl',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_ListResourceUrl);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive3d_api.DeleteResourceUrlRequest,
 *   !proto.interactive3d_api.EmptyResponse>}
 */
const methodDescriptor_Interactive3d_apiService_DeleteResourceUrl = new grpc.web.MethodDescriptor(
  '/interactive3d_api.Interactive3d_apiService/DeleteResourceUrl',
  grpc.web.MethodType.UNARY,
  proto.interactive3d_api.DeleteResourceUrlRequest,
  proto.interactive3d_api.EmptyResponse,
  /**
   * @param {!proto.interactive3d_api.DeleteResourceUrlRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive3d_api.EmptyResponse.deserializeBinary
);


/**
 * @param {!proto.interactive3d_api.DeleteResourceUrlRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.interactive3d_api.EmptyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive3d_api.EmptyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive3d_api.Interactive3d_apiServiceClient.prototype.deleteResourceUrl =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/DeleteResourceUrl',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_DeleteResourceUrl,
      callback);
};


/**
 * @param {!proto.interactive3d_api.DeleteResourceUrlRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive3d_api.EmptyResponse>}
 *     Promise that resolves to the response
 */
proto.interactive3d_api.Interactive3d_apiServicePromiseClient.prototype.deleteResourceUrl =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/DeleteResourceUrl',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_DeleteResourceUrl);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive3d_api.ValidResourceUrlRequest,
 *   !proto.interactive3d_api.ValidResourceUrlResponse>}
 */
const methodDescriptor_Interactive3d_apiService_ValidResourceUrl = new grpc.web.MethodDescriptor(
  '/interactive3d_api.Interactive3d_apiService/ValidResourceUrl',
  grpc.web.MethodType.UNARY,
  proto.interactive3d_api.ValidResourceUrlRequest,
  proto.interactive3d_api.ValidResourceUrlResponse,
  /**
   * @param {!proto.interactive3d_api.ValidResourceUrlRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive3d_api.ValidResourceUrlResponse.deserializeBinary
);


/**
 * @param {!proto.interactive3d_api.ValidResourceUrlRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.interactive3d_api.ValidResourceUrlResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive3d_api.ValidResourceUrlResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive3d_api.Interactive3d_apiServiceClient.prototype.validResourceUrl =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/ValidResourceUrl',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_ValidResourceUrl,
      callback);
};


/**
 * @param {!proto.interactive3d_api.ValidResourceUrlRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive3d_api.ValidResourceUrlResponse>}
 *     Promise that resolves to the response
 */
proto.interactive3d_api.Interactive3d_apiServicePromiseClient.prototype.validResourceUrl =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/ValidResourceUrl',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_ValidResourceUrl);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive3d_api.ListAssetsRequest,
 *   !proto.interactive3d_api.ListAssetsResponse>}
 */
const methodDescriptor_Interactive3d_apiService_ListAssets = new grpc.web.MethodDescriptor(
  '/interactive3d_api.Interactive3d_apiService/ListAssets',
  grpc.web.MethodType.UNARY,
  proto.interactive3d_api.ListAssetsRequest,
  proto.interactive3d_api.ListAssetsResponse,
  /**
   * @param {!proto.interactive3d_api.ListAssetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive3d_api.ListAssetsResponse.deserializeBinary
);


/**
 * @param {!proto.interactive3d_api.ListAssetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.interactive3d_api.ListAssetsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive3d_api.ListAssetsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive3d_api.Interactive3d_apiServiceClient.prototype.listAssets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/ListAssets',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_ListAssets,
      callback);
};


/**
 * @param {!proto.interactive3d_api.ListAssetsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive3d_api.ListAssetsResponse>}
 *     Promise that resolves to the response
 */
proto.interactive3d_api.Interactive3d_apiServicePromiseClient.prototype.listAssets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/ListAssets',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_ListAssets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive3d_api.ListCategoryRequest,
 *   !proto.interactive3d_api.ListCategoryResponse>}
 */
const methodDescriptor_Interactive3d_apiService_ListCategory = new grpc.web.MethodDescriptor(
  '/interactive3d_api.Interactive3d_apiService/ListCategory',
  grpc.web.MethodType.UNARY,
  proto.interactive3d_api.ListCategoryRequest,
  proto.interactive3d_api.ListCategoryResponse,
  /**
   * @param {!proto.interactive3d_api.ListCategoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive3d_api.ListCategoryResponse.deserializeBinary
);


/**
 * @param {!proto.interactive3d_api.ListCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.interactive3d_api.ListCategoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive3d_api.ListCategoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive3d_api.Interactive3d_apiServiceClient.prototype.listCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/ListCategory',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_ListCategory,
      callback);
};


/**
 * @param {!proto.interactive3d_api.ListCategoryRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive3d_api.ListCategoryResponse>}
 *     Promise that resolves to the response
 */
proto.interactive3d_api.Interactive3d_apiServicePromiseClient.prototype.listCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/ListCategory',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_ListCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive3d_api.ExportAssetByIdRequest,
 *   !proto.interactive3d_api.EmptyResponse>}
 */
const methodDescriptor_Interactive3d_apiService_ExportAssetById = new grpc.web.MethodDescriptor(
  '/interactive3d_api.Interactive3d_apiService/ExportAssetById',
  grpc.web.MethodType.UNARY,
  proto.interactive3d_api.ExportAssetByIdRequest,
  proto.interactive3d_api.EmptyResponse,
  /**
   * @param {!proto.interactive3d_api.ExportAssetByIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive3d_api.EmptyResponse.deserializeBinary
);


/**
 * @param {!proto.interactive3d_api.ExportAssetByIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.interactive3d_api.EmptyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive3d_api.EmptyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive3d_api.Interactive3d_apiServiceClient.prototype.exportAssetById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/ExportAssetById',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_ExportAssetById,
      callback);
};


/**
 * @param {!proto.interactive3d_api.ExportAssetByIdRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive3d_api.EmptyResponse>}
 *     Promise that resolves to the response
 */
proto.interactive3d_api.Interactive3d_apiServicePromiseClient.prototype.exportAssetById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/ExportAssetById',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_ExportAssetById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive3d_api.ListAssetTypesRequest,
 *   !proto.interactive3d_api.ListAssetTypesResponse>}
 */
const methodDescriptor_Interactive3d_apiService_ListAssetTypes = new grpc.web.MethodDescriptor(
  '/interactive3d_api.Interactive3d_apiService/ListAssetTypes',
  grpc.web.MethodType.UNARY,
  proto.interactive3d_api.ListAssetTypesRequest,
  proto.interactive3d_api.ListAssetTypesResponse,
  /**
   * @param {!proto.interactive3d_api.ListAssetTypesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive3d_api.ListAssetTypesResponse.deserializeBinary
);


/**
 * @param {!proto.interactive3d_api.ListAssetTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.interactive3d_api.ListAssetTypesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive3d_api.ListAssetTypesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive3d_api.Interactive3d_apiServiceClient.prototype.listAssetTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/ListAssetTypes',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_ListAssetTypes,
      callback);
};


/**
 * @param {!proto.interactive3d_api.ListAssetTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive3d_api.ListAssetTypesResponse>}
 *     Promise that resolves to the response
 */
proto.interactive3d_api.Interactive3d_apiServicePromiseClient.prototype.listAssetTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/ListAssetTypes',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_ListAssetTypes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive3d_api.ListAssetLabelsRequest,
 *   !proto.interactive3d_api.ListAssetLabelsResponse>}
 */
const methodDescriptor_Interactive3d_apiService_ListAssetLabels = new grpc.web.MethodDescriptor(
  '/interactive3d_api.Interactive3d_apiService/ListAssetLabels',
  grpc.web.MethodType.UNARY,
  proto.interactive3d_api.ListAssetLabelsRequest,
  proto.interactive3d_api.ListAssetLabelsResponse,
  /**
   * @param {!proto.interactive3d_api.ListAssetLabelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive3d_api.ListAssetLabelsResponse.deserializeBinary
);


/**
 * @param {!proto.interactive3d_api.ListAssetLabelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.interactive3d_api.ListAssetLabelsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive3d_api.ListAssetLabelsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive3d_api.Interactive3d_apiServiceClient.prototype.listAssetLabels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/ListAssetLabels',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_ListAssetLabels,
      callback);
};


/**
 * @param {!proto.interactive3d_api.ListAssetLabelsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive3d_api.ListAssetLabelsResponse>}
 *     Promise that resolves to the response
 */
proto.interactive3d_api.Interactive3d_apiServicePromiseClient.prototype.listAssetLabels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/ListAssetLabels',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_ListAssetLabels);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.interactive3d_api.GetAssetLabelsByIdsRequest,
 *   !proto.interactive3d_api.GetAssetLabelsByIdsResponse>}
 */
const methodDescriptor_Interactive3d_apiService_GetAssetLabelsByIds = new grpc.web.MethodDescriptor(
  '/interactive3d_api.Interactive3d_apiService/GetAssetLabelsByIds',
  grpc.web.MethodType.UNARY,
  proto.interactive3d_api.GetAssetLabelsByIdsRequest,
  proto.interactive3d_api.GetAssetLabelsByIdsResponse,
  /**
   * @param {!proto.interactive3d_api.GetAssetLabelsByIdsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.interactive3d_api.GetAssetLabelsByIdsResponse.deserializeBinary
);


/**
 * @param {!proto.interactive3d_api.GetAssetLabelsByIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.interactive3d_api.GetAssetLabelsByIdsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.interactive3d_api.GetAssetLabelsByIdsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.interactive3d_api.Interactive3d_apiServiceClient.prototype.getAssetLabelsByIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/GetAssetLabelsByIds',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_GetAssetLabelsByIds,
      callback);
};


/**
 * @param {!proto.interactive3d_api.GetAssetLabelsByIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.interactive3d_api.GetAssetLabelsByIdsResponse>}
 *     Promise that resolves to the response
 */
proto.interactive3d_api.Interactive3d_apiServicePromiseClient.prototype.getAssetLabelsByIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/interactive3d_api.Interactive3d_apiService/GetAssetLabelsByIds',
      request,
      metadata || {},
      methodDescriptor_Interactive3d_apiService_GetAssetLabelsByIds);
};


module.exports = proto.interactive3d_api;

