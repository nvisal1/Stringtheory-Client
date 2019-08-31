import React from 'react';
import Text from '../text/text';
import Lottie from 'react-lottie'
import animationData from '../../animations/892-loading-icon.json';

interface ButtonProps {
    text: string;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    height: number;
    width: number;
    fontSize?: number;
    fontColor?: string;
    isLoading?: boolean;
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

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        },
    };
    
    if (props.isLoading) {
        return (
            <button style={styles} disabled>
                <Lottie options={defaultOptions}
                    height={65}
                    width={65}
                    speed={5}
                    isClickToPauseDisabled
                />
            </button>
        )
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