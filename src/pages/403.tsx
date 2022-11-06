import { Button, Result } from 'antd';
import type React from 'react';
import { history } from 'umi';

/**
 * 无权限页面
 * @returns {JSX.Element}
 */
const NoFoundPage: React.FC = function() {
    /**
     * 跳转到首页
     */
    const toHome = () => {
        history.push('/');
    };

    /**
     * 跳转到登录页
     */
    const toLogin = () => {
        // clearAllCookies();
        history.push('/login');
    };
    return (
        <Result
            status="403"
            title="403"
            subTitle="抱歉, 您没有权限访问这个页面."
            extra={(
                <>
                    <Button type="primary" onClick={toHome}>
                        返回首页
                    </Button>
                    <Button type="primary" onClick={toLogin}>
                        重新登录
                    </Button>
                </>
            )}
        />
    );
};

export default NoFoundPage;
