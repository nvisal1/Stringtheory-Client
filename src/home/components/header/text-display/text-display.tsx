import React from 'react';
import Button from '../../../../shared/components/button/button';
import './text-display.css';
import Text from '../../../../shared/components/text/text';

interface TextDisplayProps {
    heading: string;
    sub: string;
    buttonText: string;
};

const TextDisplay: React.FC<TextDisplayProps> = props => {
    return (
        <div className='display'>
            <div className='display__header'>
                <Text
                    text={props.heading}
                    color='white'
                    fontSize={36}
                />
            </div>
            <div className='display__sub'>
                <Text
                    text={props.sub}
                    color='white'
                    fontSize={18}
                />
            </div>
            <div className='display__buttons'>
                <div className='display__buttons__signup'>
                    <Button
                        text={props.buttonText}
                        height={47}
                        width={202}
                        fontColor='#4B37FF'
                    />
                </div>
            </div>
        </div>
    );
}

export default TextDisplay;