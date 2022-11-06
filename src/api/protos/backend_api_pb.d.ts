import * as jspb from 'google-protobuf'



export class EmptyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyResponse): EmptyResponse.AsObject;
  static serializeBinaryToWriter(message: EmptyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyResponse;
  static deserializeBinaryFromReader(message: EmptyResponse, reader: jspb.BinaryReader): EmptyResponse;
}

export namespace EmptyResponse {
  export type AsObject = {
  }
}

export class ListResourcesRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListResourcesRequest;

  getPageNum(): number;
  setPageNum(value: number): ListResourcesRequest;

  getModelId(): number;
  setModelId(value: number): ListResourcesRequest;

  getModelName(): string;
  setModelName(value: string): ListResourcesRequest;

  getCategoryId(): number;
  setCategoryId(value: number): ListResourcesRequest;

  getTags(): string;
  setTags(value: string): ListResourcesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResourcesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListResourcesRequest): ListResourcesRequest.AsObject;
  static serializeBinaryToWriter(message: ListResourcesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResourcesRequest;
  static deserializeBinaryFromReader(message: ListResourcesRequest, reader: jspb.BinaryReader): ListResourcesRequest;
}

export namespace ListResourcesRequest {
  export type AsObject = {
    pageSize: number,
    pageNum: number,
    modelId: number,
    modelName: string,
    categoryId: number,
    tags: string,
  }
}

export class ResourcesItemRequest extends jspb.Message {
  getModelId(): number;
  setModelId(value: number): ResourcesItemRequest;

  getModelName(): string;
  setModelName(value: string): ResourcesItemRequest;

  getModelUrl(): string;
  setModelUrl(value: string): ResourcesItemRequest;

  getModelSize(): number;
  setModelSize(value: number): ResourcesItemRequest;

  getMaterials(): string;
  setMaterials(value: string): ResourcesItemRequest;

  getPreviewImage(): string;
  setPreviewImage(value: string): ResourcesItemRequest;

  getDescription(): string;
  setDescription(value: string): ResourcesItemRequest;

  getCategoryIdsList(): Array<number>;
  setCategoryIdsList(value: Array<number>): ResourcesItemRequest;
  clearCategoryIdsList(): ResourcesItemRequest;
  addCategoryIds(value: number, index?: number): ResourcesItemRequest;

  getCategoryIdsName(): string;
  setCategoryIdsName(value: string): ResourcesItemRequest;

  getTags(): string;
  setTags(value: string): ResourcesItemRequest;

  getExtendedProperties(): string;
  setExtendedProperties(value: string): ResourcesItemRequest;

  getCreatedTime(): string;
  setCreatedTime(value: string): ResourcesItemRequest;

  getSourceType(): number;
  setSourceType(value: number): ResourcesItemRequest;

  getAssetTypeId(): number;
  setAssetTypeId(value: number): ResourcesItemRequest;

  getThirdPartyId(): string;
  setThirdPartyId(value: string): ResourcesItemRequest;

  getLod(): string;
  setLod(value: string): ResourcesItemRequest;

  getDefaultPackages(): string;
  setDefaultPackages(value: string): ResourcesItemRequest;

  getTextureOption(): string;
  setTextureOption(value: string): ResourcesItemRequest;

  getResolutions(): string;
  setResolutions(value: string): ResourcesItemRequest;

  getAssetsFiles(): string;
  setAssetsFiles(value: string): ResourcesItemRequest;

  getPackagesFiles(): string;
  setPackagesFiles(value: string): ResourcesItemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourcesItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResourcesItemRequest): ResourcesItemRequest.AsObject;
  static serializeBinaryToWriter(message: ResourcesItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourcesItemRequest;
  static deserializeBinaryFromReader(message: ResourcesItemRequest, reader: jspb.BinaryReader): ResourcesItemRequest;
}

export namespace ResourcesItemRequest {
  export type AsObject = {
    modelId: number,
    modelName: string,
    modelUrl: string,
    modelSize: number,
    materials: string,
    previewImage: string,
    description: string,
    categoryIdsList: Array<number>,
    categoryIdsName: string,
    tags: string,
    extendedProperties: string,
    createdTime: string,
    sourceType: number,
    assetTypeId: number,
    thirdPartyId: string,
    lod: string,
    defaultPackages: string,
    textureOption: string,
    resolutions: string,
    assetsFiles: string,
    packagesFiles: string,
  }
}

export class ListResourcesResponse extends jspb.Message {
  getTotal(): string;
  setTotal(value: string): ListResourcesResponse;

  getListList(): Array<ResourcesItemRequest>;
  setListList(value: Array<ResourcesItemRequest>): ListResourcesResponse;
  clearListList(): ListResourcesResponse;
  addList(value?: ResourcesItemRequest, index?: number): ResourcesItemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResourcesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResourcesResponse): ListResourcesResponse.AsObject;
  static serializeBinaryToWriter(message: ListResourcesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResourcesResponse;
  static deserializeBinaryFromReader(message: ListResourcesResponse, reader: jspb.BinaryReader): ListResourcesResponse;
}

export namespace ListResourcesResponse {
  export type AsObject = {
    total: string,
    listList: Array<ResourcesItemRequest.AsObject>,
  }
}

export class CreateResourceRequest extends jspb.Message {
  getModelName(): string;
  setModelName(value: string): CreateResourceRequest;

  getModelUrl(): string;
  setModelUrl(value: string): CreateResourceRequest;

  getModelSize(): number;
  setModelSize(value: number): CreateResourceRequest;

  getMaterials(): string;
  setMaterials(value: string): CreateResourceRequest;

  getPreviewImage(): string;
  setPreviewImage(value: string): CreateResourceRequest;

  getDescription(): string;
  setDescription(value: string): CreateResourceRequest;

  getCategoryIdsList(): Array<number>;
  setCategoryIdsList(value: Array<number>): CreateResourceRequest;
  clearCategoryIdsList(): CreateResourceRequest;
  addCategoryIds(value: number, index?: number): CreateResourceRequest;

  getAssetTypeId(): number;
  setAssetTypeId(value: number): CreateResourceRequest;

  getTags(): string;
  setTags(value: string): CreateResourceRequest;

  getExtendedProperties(): string;
  setExtendedProperties(value: string): CreateResourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResourceRequest): CreateResourceRequest.AsObject;
  static serializeBinaryToWriter(message: CreateResourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResourceRequest;
  static deserializeBinaryFromReader(message: CreateResourceRequest, reader: jspb.BinaryReader): CreateResourceRequest;
}

export namespace CreateResourceRequest {
  export type AsObject = {
    modelName: string,
    modelUrl: string,
    modelSize: number,
    materials: string,
    previewImage: string,
    description: string,
    categoryIdsList: Array<number>,
    assetTypeId: number,
    tags: string,
    extendedProperties: string,
  }
}

export class CreateResourceResponse extends jspb.Message {
  getModelId(): number;
  setModelId(value: number): CreateResourceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResourceResponse): CreateResourceResponse.AsObject;
  static serializeBinaryToWriter(message: CreateResourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResourceResponse;
  static deserializeBinaryFromReader(message: CreateResourceResponse, reader: jspb.BinaryReader): CreateResourceResponse;
}

export namespace CreateResourceResponse {
  export type AsObject = {
    modelId: number,
  }
}

export class DeleteResourceByModelIdRequest extends jspb.Message {
  getModelId(): number;
  setModelId(value: number): DeleteResourceByModelIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResourceByModelIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResourceByModelIdRequest): DeleteResourceByModelIdRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteResourceByModelIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResourceByModelIdRequest;
  static deserializeBinaryFromReader(message: DeleteResourceByModelIdRequest, reader: jspb.BinaryReader): DeleteResourceByModelIdRequest;
}

export namespace DeleteResourceByModelIdRequest {
  export type AsObject = {
    modelId: number,
  }
}

export class UpdateResourceRequest extends jspb.Message {
  getModelId(): number;
  setModelId(value: number): UpdateResourceRequest;

  getModelName(): string;
  setModelName(value: string): UpdateResourceRequest;

  getModelUrl(): string;
  setModelUrl(value: string): UpdateResourceRequest;

  getModelSize(): number;
  setModelSize(value: number): UpdateResourceRequest;

  getMaterials(): string;
  setMaterials(value: string): UpdateResourceRequest;

  getPreviewImage(): string;
  setPreviewImage(value: string): UpdateResourceRequest;

  getDescription(): string;
  setDescription(value: string): UpdateResourceRequest;

  getCategoryIdsList(): Array<number>;
  setCategoryIdsList(value: Array<number>): UpdateResourceRequest;
  clearCategoryIdsList(): UpdateResourceRequest;
  addCategoryIds(value: number, index?: number): UpdateResourceRequest;

  getTags(): string;
  setTags(value: string): UpdateResourceRequest;

  getExtendedProperties(): string;
  setExtendedProperties(value: string): UpdateResourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResourceRequest): UpdateResourceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateResourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResourceRequest;
  static deserializeBinaryFromReader(message: UpdateResourceRequest, reader: jspb.BinaryReader): UpdateResourceRequest;
}

export namespace UpdateResourceRequest {
  export type AsObject = {
    modelId: number,
    modelName: string,
    modelUrl: string,
    modelSize: number,
    materials: string,
    previewImage: string,
    description: string,
    categoryIdsList: Array<number>,
    tags: string,
    extendedProperties: string,
  }
}

export class CreateResourceUrlRequest extends jspb.Message {
  getModelId(): number;
  setModelId(value: number): CreateResourceUrlRequest;

  getConcurrent(): number;
  setConcurrent(value: number): CreateResourceUrlRequest;

  getStartTime(): number;
  setStartTime(value: number): CreateResourceUrlRequest;

  getEndTime(): number;
  setEndTime(value: number): CreateResourceUrlRequest;

  getPwd(): string;
  setPwd(value: string): CreateResourceUrlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResourceUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResourceUrlRequest): CreateResourceUrlRequest.AsObject;
  static serializeBinaryToWriter(message: CreateResourceUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResourceUrlRequest;
  static deserializeBinaryFromReader(message: CreateResourceUrlRequest, reader: jspb.BinaryReader): CreateResourceUrlRequest;
}

export namespace CreateResourceUrlRequest {
  export type AsObject = {
    modelId: number,
    concurrent: number,
    startTime: number,
    endTime: number,
    pwd: string,
  }
}

export class CreateResourceUrlResponse extends jspb.Message {
  getId(): number;
  setId(value: number): CreateResourceUrlResponse;

  getUrl(): string;
  setUrl(value: string): CreateResourceUrlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResourceUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResourceUrlResponse): CreateResourceUrlResponse.AsObject;
  static serializeBinaryToWriter(message: CreateResourceUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResourceUrlResponse;
  static deserializeBinaryFromReader(message: CreateResourceUrlResponse, reader: jspb.BinaryReader): CreateResourceUrlResponse;
}

export namespace CreateResourceUrlResponse {
  export type AsObject = {
    id: number,
    url: string,
  }
}

export class GetResourceUrlInfoRequest extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): GetResourceUrlInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResourceUrlInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetResourceUrlInfoRequest): GetResourceUrlInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetResourceUrlInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResourceUrlInfoRequest;
  static deserializeBinaryFromReader(message: GetResourceUrlInfoRequest, reader: jspb.BinaryReader): GetResourceUrlInfoRequest;
}

export namespace GetResourceUrlInfoRequest {
  export type AsObject = {
    url: string,
  }
}

export class ResourceUrlsItemResponse extends jspb.Message {
  getId(): number;
  setId(value: number): ResourceUrlsItemResponse;

  getModelId(): number;
  setModelId(value: number): ResourceUrlsItemResponse;

  getConcurrent(): number;
  setConcurrent(value: number): ResourceUrlsItemResponse;

  getStartTime(): string;
  setStartTime(value: string): ResourceUrlsItemResponse;

  getEndTime(): string;
  setEndTime(value: string): ResourceUrlsItemResponse;

  getUrl(): string;
  setUrl(value: string): ResourceUrlsItemResponse;

  getIsPwd(): boolean;
  setIsPwd(value: boolean): ResourceUrlsItemResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceUrlsItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceUrlsItemResponse): ResourceUrlsItemResponse.AsObject;
  static serializeBinaryToWriter(message: ResourceUrlsItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceUrlsItemResponse;
  static deserializeBinaryFromReader(message: ResourceUrlsItemResponse, reader: jspb.BinaryReader): ResourceUrlsItemResponse;
}

export namespace ResourceUrlsItemResponse {
  export type AsObject = {
    id: number,
    modelId: number,
    concurrent: number,
    startTime: string,
    endTime: string,
    url: string,
    isPwd: boolean,
  }
}

export class GetResourceUrlInfoResponse extends jspb.Message {
  getInfo(): ResourceUrlsItemResponse | undefined;
  setInfo(value?: ResourceUrlsItemResponse): GetResourceUrlInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetResourceUrlInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResourceUrlInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResourceUrlInfoResponse): GetResourceUrlInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetResourceUrlInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResourceUrlInfoResponse;
  static deserializeBinaryFromReader(message: GetResourceUrlInfoResponse, reader: jspb.BinaryReader): GetResourceUrlInfoResponse;
}

export namespace GetResourceUrlInfoResponse {
  export type AsObject = {
    info?: ResourceUrlsItemResponse.AsObject,
  }
}

export class UpdateResourceUrlRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateResourceUrlRequest;

  getConcurrent(): number;
  setConcurrent(value: number): UpdateResourceUrlRequest;

  getStartTime(): number;
  setStartTime(value: number): UpdateResourceUrlRequest;

  getEndTime(): number;
  setEndTime(value: number): UpdateResourceUrlRequest;

  getPwd(): string;
  setPwd(value: string): UpdateResourceUrlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResourceUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResourceUrlRequest): UpdateResourceUrlRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateResourceUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResourceUrlRequest;
  static deserializeBinaryFromReader(message: UpdateResourceUrlRequest, reader: jspb.BinaryReader): UpdateResourceUrlRequest;
}

export namespace UpdateResourceUrlRequest {
  export type AsObject = {
    id: number,
    concurrent: number,
    startTime: number,
    endTime: number,
    pwd: string,
  }
}

export class ListResourceUrlRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListResourceUrlRequest;

  getPageNum(): number;
  setPageNum(value: number): ListResourceUrlRequest;

  getModelId(): number;
  setModelId(value: number): ListResourceUrlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResourceUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListResourceUrlRequest): ListResourceUrlRequest.AsObject;
  static serializeBinaryToWriter(message: ListResourceUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResourceUrlRequest;
  static deserializeBinaryFromReader(message: ListResourceUrlRequest, reader: jspb.BinaryReader): ListResourceUrlRequest;
}

export namespace ListResourceUrlRequest {
  export type AsObject = {
    pageSize: number,
    pageNum: number,
    modelId: number,
  }
}

export class ResourceUrlsItemRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ResourceUrlsItemRequest;

  getConcurrent(): number;
  setConcurrent(value: number): ResourceUrlsItemRequest;

  getStartTime(): string;
  setStartTime(value: string): ResourceUrlsItemRequest;

  getEndTime(): string;
  setEndTime(value: string): ResourceUrlsItemRequest;

  getUrl(): string;
  setUrl(value: string): ResourceUrlsItemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceUrlsItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceUrlsItemRequest): ResourceUrlsItemRequest.AsObject;
  static serializeBinaryToWriter(message: ResourceUrlsItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceUrlsItemRequest;
  static deserializeBinaryFromReader(message: ResourceUrlsItemRequest, reader: jspb.BinaryReader): ResourceUrlsItemRequest;
}

export namespace ResourceUrlsItemRequest {
  export type AsObject = {
    id: number,
    concurrent: number,
    startTime: string,
    endTime: string,
    url: string,
  }
}

export class ListResourceUrlResponse extends jspb.Message {
  getListList(): Array<ResourceUrlsItemResponse>;
  setListList(value: Array<ResourceUrlsItemResponse>): ListResourceUrlResponse;
  clearListList(): ListResourceUrlResponse;
  addList(value?: ResourceUrlsItemResponse, index?: number): ResourceUrlsItemResponse;

  getTotal(): number;
  setTotal(value: number): ListResourceUrlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResourceUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResourceUrlResponse): ListResourceUrlResponse.AsObject;
  static serializeBinaryToWriter(message: ListResourceUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResourceUrlResponse;
  static deserializeBinaryFromReader(message: ListResourceUrlResponse, reader: jspb.BinaryReader): ListResourceUrlResponse;
}

export namespace ListResourceUrlResponse {
  export type AsObject = {
    listList: Array<ResourceUrlsItemResponse.AsObject>,
    total: number,
  }
}

export class DeleteResourceUrlRequest extends jspb.Message {
  getModelId(): number;
  setModelId(value: number): DeleteResourceUrlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResourceUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResourceUrlRequest): DeleteResourceUrlRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteResourceUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResourceUrlRequest;
  static deserializeBinaryFromReader(message: DeleteResourceUrlRequest, reader: jspb.BinaryReader): DeleteResourceUrlRequest;
}

export namespace DeleteResourceUrlRequest {
  export type AsObject = {
    modelId: number,
  }
}

export class ValidResourceUrlRequest extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): ValidResourceUrlRequest;

  getPwd(): string;
  setPwd(value: string): ValidResourceUrlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidResourceUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidResourceUrlRequest): ValidResourceUrlRequest.AsObject;
  static serializeBinaryToWriter(message: ValidResourceUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidResourceUrlRequest;
  static deserializeBinaryFromReader(message: ValidResourceUrlRequest, reader: jspb.BinaryReader): ValidResourceUrlRequest;
}

export namespace ValidResourceUrlRequest {
  export type AsObject = {
    url: string,
    pwd: string,
  }
}

export class ValidResourceUrlResponse extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): ValidResourceUrlResponse;

  getModelUrl(): string;
  setModelUrl(value: string): ValidResourceUrlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidResourceUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidResourceUrlResponse): ValidResourceUrlResponse.AsObject;
  static serializeBinaryToWriter(message: ValidResourceUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidResourceUrlResponse;
  static deserializeBinaryFromReader(message: ValidResourceUrlResponse, reader: jspb.BinaryReader): ValidResourceUrlResponse;
}

export namespace ValidResourceUrlResponse {
  export type AsObject = {
    valid: boolean,
    modelUrl: string,
  }
}

export class GetResourceInfoRequest extends jspb.Message {
  getModelId(): number;
  setModelId(value: number): GetResourceInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResourceInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetResourceInfoRequest): GetResourceInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetResourceInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResourceInfoRequest;
  static deserializeBinaryFromReader(message: GetResourceInfoRequest, reader: jspb.BinaryReader): GetResourceInfoRequest;
}

export namespace GetResourceInfoRequest {
  export type AsObject = {
    modelId: number,
  }
}

export class GetResourceInfoResponse extends jspb.Message {
  getInfo(): ResourcesItemRequest | undefined;
  setInfo(value?: ResourcesItemRequest): GetResourceInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetResourceInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResourceInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResourceInfoResponse): GetResourceInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetResourceInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResourceInfoResponse;
  static deserializeBinaryFromReader(message: GetResourceInfoResponse, reader: jspb.BinaryReader): GetResourceInfoResponse;
}

export namespace GetResourceInfoResponse {
  export type AsObject = {
    info?: ResourcesItemRequest.AsObject,
  }
}

export class ListCategoryRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCategoryRequest): ListCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: ListCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCategoryRequest;
  static deserializeBinaryFromReader(message: ListCategoryRequest, reader: jspb.BinaryReader): ListCategoryRequest;
}

export namespace ListCategoryRequest {
  export type AsObject = {
  }
}

export class CategoryItemResponse extends jspb.Message {
  getCategoryId(): number;
  setCategoryId(value: number): CategoryItemResponse;

  getParentId(): number;
  setParentId(value: number): CategoryItemResponse;

  getName(): string;
  setName(value: string): CategoryItemResponse;

  getNameEn(): string;
  setNameEn(value: string): CategoryItemResponse;

  getLevel(): number;
  setLevel(value: number): CategoryItemResponse;

  getPath(): string;
  setPath(value: string): CategoryItemResponse;

  getChildList(): Array<CategoryItemResponse>;
  setChildList(value: Array<CategoryItemResponse>): CategoryItemResponse;
  clearChildList(): CategoryItemResponse;
  addChild(value?: CategoryItemResponse, index?: number): CategoryItemResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryItemResponse): CategoryItemResponse.AsObject;
  static serializeBinaryToWriter(message: CategoryItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryItemResponse;
  static deserializeBinaryFromReader(message: CategoryItemResponse, reader: jspb.BinaryReader): CategoryItemResponse;
}

export namespace CategoryItemResponse {
  export type AsObject = {
    categoryId: number,
    parentId: number,
    name: string,
    nameEn: string,
    level: number,
    path: string,
    childList: Array<CategoryItemResponse.AsObject>,
  }
}

export class ListCategoryResponse extends jspb.Message {
  getListList(): Array<CategoryItemResponse>;
  setListList(value: Array<CategoryItemResponse>): ListCategoryResponse;
  clearListList(): ListCategoryResponse;
  addList(value?: CategoryItemResponse, index?: number): CategoryItemResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCategoryResponse): ListCategoryResponse.AsObject;
  static serializeBinaryToWriter(message: ListCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCategoryResponse;
  static deserializeBinaryFromReader(message: ListCategoryResponse, reader: jspb.BinaryReader): ListCategoryResponse;
}

export namespace ListCategoryResponse {
  export type AsObject = {
    listList: Array<CategoryItemResponse.AsObject>,
  }
}

export class ListAssetsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListAssetsRequest;

  getPageNum(): number;
  setPageNum(value: number): ListAssetsRequest;

  getAssetIdName(): string;
  setAssetIdName(value: string): ListAssetsRequest;

  getAssetTypeIdsList(): Array<number>;
  setAssetTypeIdsList(value: Array<number>): ListAssetsRequest;
  clearAssetTypeIdsList(): ListAssetsRequest;
  addAssetTypeIds(value: number, index?: number): ListAssetsRequest;

  getAssetStatus(): number;
  setAssetStatus(value: number): ListAssetsRequest;

  getAssetNature(): number;
  setAssetNature(value: number): ListAssetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssetsRequest): ListAssetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAssetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssetsRequest;
  static deserializeBinaryFromReader(message: ListAssetsRequest, reader: jspb.BinaryReader): ListAssetsRequest;
}

export namespace ListAssetsRequest {
  export type AsObject = {
    pageSize: number,
    pageNum: number,
    assetIdName: string,
    assetTypeIdsList: Array<number>,
    assetStatus: number,
    assetNature: number,
  }
}

export class AssetItem extends jspb.Message {
  getInternalId(): string;
  setInternalId(value: string): AssetItem;

  getName(): string;
  setName(value: string): AssetItem;

  getPreviewImageUrl(): string;
  setPreviewImageUrl(value: string): AssetItem;

  getIsExport(): number;
  setIsExport(value: number): AssetItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetItem.AsObject;
  static toObject(includeInstance: boolean, msg: AssetItem): AssetItem.AsObject;
  static serializeBinaryToWriter(message: AssetItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetItem;
  static deserializeBinaryFromReader(message: AssetItem, reader: jspb.BinaryReader): AssetItem;
}

export namespace AssetItem {
  export type AsObject = {
    internalId: string,
    name: string,
    previewImageUrl: string,
    isExport: number,
  }
}

export class ListAssetsResponse extends jspb.Message {
  getTotal(): string;
  setTotal(value: string): ListAssetsResponse;

  getListList(): Array<AssetItem>;
  setListList(value: Array<AssetItem>): ListAssetsResponse;
  clearListList(): ListAssetsResponse;
  addList(value?: AssetItem, index?: number): AssetItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssetsResponse): ListAssetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAssetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssetsResponse;
  static deserializeBinaryFromReader(message: ListAssetsResponse, reader: jspb.BinaryReader): ListAssetsResponse;
}

export namespace ListAssetsResponse {
  export type AsObject = {
    total: string,
    listList: Array<AssetItem.AsObject>,
  }
}

export class ExportAssetByIdRequest extends jspb.Message {
  getThirdPartyId(): string;
  setThirdPartyId(value: string): ExportAssetByIdRequest;

  getReImport(): number;
  setReImport(value: number): ExportAssetByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportAssetByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportAssetByIdRequest): ExportAssetByIdRequest.AsObject;
  static serializeBinaryToWriter(message: ExportAssetByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportAssetByIdRequest;
  static deserializeBinaryFromReader(message: ExportAssetByIdRequest, reader: jspb.BinaryReader): ExportAssetByIdRequest;
}

export namespace ExportAssetByIdRequest {
  export type AsObject = {
    thirdPartyId: string,
    reImport: number,
  }
}

export class ListAssetTypesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssetTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssetTypesRequest): ListAssetTypesRequest.AsObject;
  static serializeBinaryToWriter(message: ListAssetTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssetTypesRequest;
  static deserializeBinaryFromReader(message: ListAssetTypesRequest, reader: jspb.BinaryReader): ListAssetTypesRequest;
}

export namespace ListAssetTypesRequest {
  export type AsObject = {
  }
}

export class AssetTypeItem extends jspb.Message {
  getId(): number;
  setId(value: number): AssetTypeItem;

  getName(): string;
  setName(value: string): AssetTypeItem;

  getNameEn(): string;
  setNameEn(value: string): AssetTypeItem;

  getCode(): string;
  setCode(value: string): AssetTypeItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetTypeItem.AsObject;
  static toObject(includeInstance: boolean, msg: AssetTypeItem): AssetTypeItem.AsObject;
  static serializeBinaryToWriter(message: AssetTypeItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetTypeItem;
  static deserializeBinaryFromReader(message: AssetTypeItem, reader: jspb.BinaryReader): AssetTypeItem;
}

export namespace AssetTypeItem {
  export type AsObject = {
    id: number,
    name: string,
    nameEn: string,
    code: string,
  }
}

export class ListAssetTypesResponse extends jspb.Message {
  getListList(): Array<AssetTypeItem>;
  setListList(value: Array<AssetTypeItem>): ListAssetTypesResponse;
  clearListList(): ListAssetTypesResponse;
  addList(value?: AssetTypeItem, index?: number): AssetTypeItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssetTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssetTypesResponse): ListAssetTypesResponse.AsObject;
  static serializeBinaryToWriter(message: ListAssetTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssetTypesResponse;
  static deserializeBinaryFromReader(message: ListAssetTypesResponse, reader: jspb.BinaryReader): ListAssetTypesResponse;
}

export namespace ListAssetTypesResponse {
  export type AsObject = {
    listList: Array<AssetTypeItem.AsObject>,
  }
}

export class AssetLabel extends jspb.Message {
  getId(): number;
  setId(value: number): AssetLabel;

  getName(): string;
  setName(value: string): AssetLabel;

  getNameEn(): string;
  setNameEn(value: string): AssetLabel;

  getIsSearch(): number;
  setIsSearch(value: number): AssetLabel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetLabel.AsObject;
  static toObject(includeInstance: boolean, msg: AssetLabel): AssetLabel.AsObject;
  static serializeBinaryToWriter(message: AssetLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetLabel;
  static deserializeBinaryFromReader(message: AssetLabel, reader: jspb.BinaryReader): AssetLabel;
}

export namespace AssetLabel {
  export type AsObject = {
    id: number,
    name: string,
    nameEn: string,
    isSearch: number,
  }
}

export class ListAssetLabelsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListAssetLabelsRequest;

  getPageNum(): number;
  setPageNum(value: number): ListAssetLabelsRequest;

  getId(): number;
  setId(value: number): ListAssetLabelsRequest;

  getName(): string;
  setName(value: string): ListAssetLabelsRequest;

  getNameEn(): string;
  setNameEn(value: string): ListAssetLabelsRequest;

  getIsSearch(): number;
  setIsSearch(value: number): ListAssetLabelsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssetLabelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssetLabelsRequest): ListAssetLabelsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAssetLabelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssetLabelsRequest;
  static deserializeBinaryFromReader(message: ListAssetLabelsRequest, reader: jspb.BinaryReader): ListAssetLabelsRequest;
}

export namespace ListAssetLabelsRequest {
  export type AsObject = {
    pageSize: number,
    pageNum: number,
    id: number,
    name: string,
    nameEn: string,
    isSearch: number,
  }
}

export class ListAssetLabelsResponse extends jspb.Message {
  getListList(): Array<AssetLabel>;
  setListList(value: Array<AssetLabel>): ListAssetLabelsResponse;
  clearListList(): ListAssetLabelsResponse;
  addList(value?: AssetLabel, index?: number): AssetLabel;

  getCount(): number;
  setCount(value: number): ListAssetLabelsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssetLabelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssetLabelsResponse): ListAssetLabelsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAssetLabelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssetLabelsResponse;
  static deserializeBinaryFromReader(message: ListAssetLabelsResponse, reader: jspb.BinaryReader): ListAssetLabelsResponse;
}

export namespace ListAssetLabelsResponse {
  export type AsObject = {
    listList: Array<AssetLabel.AsObject>,
    count: number,
  }
}

export class GetAssetLabelsByIdsRequest extends jspb.Message {
  getIdList(): Array<number>;
  setIdList(value: Array<number>): GetAssetLabelsByIdsRequest;
  clearIdList(): GetAssetLabelsByIdsRequest;
  addId(value: number, index?: number): GetAssetLabelsByIdsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssetLabelsByIdsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssetLabelsByIdsRequest): GetAssetLabelsByIdsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAssetLabelsByIdsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssetLabelsByIdsRequest;
  static deserializeBinaryFromReader(message: GetAssetLabelsByIdsRequest, reader: jspb.BinaryReader): GetAssetLabelsByIdsRequest;
}

export namespace GetAssetLabelsByIdsRequest {
  export type AsObject = {
    idList: Array<number>,
  }
}

export class GetAssetLabelsByIdsResponse extends jspb.Message {
  getListList(): Array<AssetLabel>;
  setListList(value: Array<AssetLabel>): GetAssetLabelsByIdsResponse;
  clearListList(): GetAssetLabelsByIdsResponse;
  addList(value?: AssetLabel, index?: number): AssetLabel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssetLabelsByIdsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssetLabelsByIdsResponse): GetAssetLabelsByIdsResponse.AsObject;
  static serializeBinaryToWriter(message: GetAssetLabelsByIdsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssetLabelsByIdsResponse;
  static deserializeBinaryFromReader(message: GetAssetLabelsByIdsResponse, reader: jspb.BinaryReader): GetAssetLabelsByIdsResponse;
}

export namespace GetAssetLabelsByIdsResponse {
  export type AsObject = {
    listList: Array<AssetLabel.AsObject>,
  }
}

export class DeleteBatchAssetsRequest extends jspb.Message {
  getModelIdsList(): Array<number>;
  setModelIdsList(value: Array<number>): DeleteBatchAssetsRequest;
  clearModelIdsList(): DeleteBatchAssetsRequest;
  addModelIds(value: number, index?: number): DeleteBatchAssetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBatchAssetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBatchAssetsRequest): DeleteBatchAssetsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBatchAssetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBatchAssetsRequest;
  static deserializeBinaryFromReader(message: DeleteBatchAssetsRequest, reader: jspb.BinaryReader): DeleteBatchAssetsRequest;
}

export namespace DeleteBatchAssetsRequest {
  export type AsObject = {
    modelIdsList: Array<number>,
  }
}

