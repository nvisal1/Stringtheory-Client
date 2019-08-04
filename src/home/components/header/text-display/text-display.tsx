import React from 'react';
import Button from '../../../../shared/components/button/button';
import './text-display.css';

interface TextDisplayProps {
    heading: string;
    sub: string;
    buttonText: string;
};

const TextDisplay: React.FC<TextDisplayProps> = props => {
    return (
        <div className='display'>
            <div className='display__header'>
                {props.heading}
            </div>
            <div className='display__sub'>
                {props.sub}
            </div>
            <div className='display__buttons'>
                <div className='display__buttons__signup'>
                    <Button
                        text={props.buttonText}
                        height={47}
                        width={202}
                    />
                </div>
            </div>
        </div>
    );
}

export default TextDisplay;