import React from 'react';

interface ChildProps {
    color: string;
    onClick: () => void;
}

// const onClick = () => {
//     console.log('Something clicked');
// };

export const Child: React.FC<ChildProps> = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            {color}
            <button type="button" onClick={onClick}>
                Click
            </button>
        </div>
    );
};

export const ChildAsFC: React.FC<ChildProps> = ({
    color,
    onClick,
    children,
}) => {
    return (
        <div>
            {color}
            {children}
            <button type="button" onClick={onClick}>
                Click me
            </button>
        </div>
    );
};
