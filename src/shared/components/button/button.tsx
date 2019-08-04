import React from 'react';
import Text from '../text/text';

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
            <Text
                text={props.text}
                color='#4B37FF'
            />
        </button>
    );
};

export default Button;