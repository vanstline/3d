import { BaseAbstract } from 'ecoplants-lib';

/**
 * 用户信息类
 */
export class User extends BaseAbstract<null> {
    /**
     * 获取用户信息
     *
     * @memberof User
     * @return {UserInfo}
     */
    getUserInfo(): Promise<{
        token: string | null;
    }> {
        return new Promise((resolve) => {
            resolve({
                token: localStorage.getItem('imp-token')
            });
        });
    }
}

/**
 * 实例化用户库
 *
 * @export
 * @return {User}
 */
export default function (): User {
    return User.singleton();
}
