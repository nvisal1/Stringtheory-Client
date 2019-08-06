import React from 'react';
import Text from '../text/text';

interface ButtonProps {
    text: string;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    height: number;
    width: number;
    fontSize?: number;
    fontColor?: string;
};

const Button: React.FC<ButtonProps> = props => {
    let styles = {
        height: `${props.height}px`,
        width: `${props.width}px`,
        backgroundColor: props.backgroundColor || 'none',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    };

    if (props.borderColor && props.borderWidth) {
        styles.border = `${props.borderWidth}px solid ${props.borderColor}`;
    }
    
    return (
        <button style={styles}>
            <Text
                text={props.text}
                color={props.fontColor || 'white'}
                fontSize={props.fontSize || 12}
            />
        </button>
    );
};

export default Button;