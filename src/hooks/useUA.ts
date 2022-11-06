import { useEffect } from 'react';
import Reg from '@/utils/regex';

type UA = 'PC' | 'mobile';

interface ICall {
    type: UA;
    fn: () => void;
}

/**
 * useUA
 *
 * @param {ICall} [cb] cb
 * @return {*}  {UA}
 */
const useUA = (cb?: ICall): UA => {
    const type = Reg.phone.test(navigator.userAgent) ? 'mobile' : 'PC';

    useEffect(() => {
        if (cb && type === cb.type) {
            cb.fn();
        }
    }, []);

    return type;
};

export default useUA;
