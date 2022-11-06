import type React from 'react';
import { memo } from 'react';
import BaseLayout from './base_layout';

/**
 * 布局组件
 * @param {P} props 组件参数
 * @returns {JSX.Element}
 */
const Layout: React.FC<{ routes: any; children: React.ReactNode[] }> = function ({ routes, children }) {
    // const { children } = props;
    return <BaseLayout routes={routes}>{children}</BaseLayout>;
};

export default memo(Layout);
