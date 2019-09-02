import React from 'react';
import Lottie from 'react-lottie';

export interface AnimationProps {
    animationData: any;
    height: number;
    width: number;
    speed: number;
};

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: null,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
};

const Animation: React.FC<AnimationProps> = props => {
    return (
        <Lottie options={ { ...defaultOptions, animationData: props.animationData } }
            height={ props.height }
            width={ props.width }
            speed={ props.speed }
            isClickToPauseDisabled
        />
    );
};

export default Animation;