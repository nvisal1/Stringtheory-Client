import React from 'react';
import './button.css';

interface ButtonProps {
    text: string;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    height: number;
    width: number;
};

const Button: React.FC<ButtonProps> = props => {
    let styles = {
        height: `${props.height}px`,
        width: `${props.width}px`,
        borderColor: props.borderColor || 'none',
        borderWidth: `${props.borderWidth}px` || 'none',
        backgroundColor: props.backgroundColor || 'none',
        borderRadius: '5px',
    };
    return (
        <button style={styles}>
            {props.text }
        </button>
    );
};

export default Button;