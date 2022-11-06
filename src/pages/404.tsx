import { Button, Result } from 'antd';
import type React from 'react';
import { history } from 'umi';

/**
 * 404页面
 * @returns {JSX.Element}
 */
const NoFoundPage: React.FC = function () {
    /**
     * 跳转到首页
     */
    const toHome = () => {
        history.push('/');
    };
    return (
        <Result
            status="404"
            title="404"
            subTitle="抱歉, 您访问的页面不存在。"
            extra={(
                <Button type="primary" onClick={toHome}>
                    去首页
                </Button>
            )}
        />
    );
};

export default NoFoundPage;
