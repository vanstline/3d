import type React from 'react';
import Render from './render';
// import styles from './index.less';

/**
 * 首页
 * @returns {React.ReactNode} 组件
 */
export default function indexPage(): React.ReactNode {
    return (
        <div id="imp">
            <Render />
        </div>
    );
}
