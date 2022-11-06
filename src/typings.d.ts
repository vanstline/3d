declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.json';

declare module 'utils';
declare module 'utils/*';
declare module 'components/*';

declare module 'three/examples/jsm/libs/stats.module.js';
declare module '@react-three/fiber/dist/react-three-fiber.cjs.d.ts';
declare module 'react-three-mind'

interface IEnv {
    /**
     * css前缀简称
     */
    ssn: string;
    /**
     * 环境名称
     */
    envName: string;
    /**
     * 系统名称
     */
    systemName: string;
    /**
     * api地址
     */
    serveUrls: string;
    /**
     * 上传地址
     */
    avatarUrls: string;
    /**
     * 下载地址
     */
    uploadUrls: string;

    /**
     * 版本号
     */
    appVersion: string;
    /**
     * grpc 插件配置
     */
    devtoolOption?: any | null;
}

// eslint-disable-next-line no-unused-vars
interface IGrpcConstructor {
    new (hostname?: string, credentials?: null | Record<string, string>, options?: null | Record<string, any>): any;
}

declare module 'env' {
    const env: IEnv;
    export default env;
}
declare module '*.svg' {
    export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
    const url: string;
    export default url;
}

// declare global{
//  export type IKeyValue<T = string|number|boolean|undefined|null> = Record<string, T>;
// }

// eslint-disable-next-line no-unused-vars
type IKeyValue<T = string | number | boolean | undefined | null> = Record<string, T>;

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line @typescript-eslint/naming-convention
interface Window {
    appVersion: string;
    __GRPCWEB_DEVTOOLS__: any;
}
