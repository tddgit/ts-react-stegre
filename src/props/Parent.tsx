import React from 'react';
import { Child, ChildAsFC } from './Child';

const Parent: React.FC = () => {
    return (
        <>
            <Child color="red" onClick={() => console.log('Clicked')} />
            <ChildAsFC color="red" onClick={() => console.log('Clicked')} />
        </>
    );
};

export default Parent;
