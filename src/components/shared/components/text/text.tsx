import React from 'react';

interface TextProps {
    text: string;
    color?: string;
    fontSize?: number;
}

const Text: React.FC<TextProps> = props => {
    let styles = {
        color: props.color || 'black',
        fontSize: `${props.fontSize}px` || '12px',
        fontFamily: 'Arial Black',
    }
    return (
        <div style={styles}>
            {props.text}
        </div>
    );
}

export default Text;