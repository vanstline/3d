import { useEffect, useRef } from 'react';
import renderObj from './scene';
import './index.less';

const root = 'imp-3d';
/**
 * Index
 *
 * @return {*}
 */
const Index = () => {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (container.current) {
            renderObj(container.current);
        }
    }, []);

    return <div className={`${root}-wrap`} ref={container} />;
};

export default Index;
