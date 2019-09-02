import React from 'react';
import './card.css';
import Animation from '../animation/animation';
import Text from '../../../shared/components/text/text';

export interface CardProps {
    animationData: any;
    headerText: string;
    descriptionText: string;
    fontColor: string;
    backgroundColor: string;
};

const Card: React.FC<CardProps> = props => {
    const style = {
        backgroundColor: props.backgroundColor
    };

    return (
        <div className='card' style={ style }>
            <Animation 
                animationData={ props.animationData } 
                height={ 120 }
                width={ 120}
                speed={ 1 }
            />
            <div className='card__content-container'>
                <div className='card__content-container__header'>
                    <Text
                        text={ props.headerText }
                        color={ props.fontColor }
                        fontSize={ 24 }
                    />
                </div>
                <div className='card__content-container__description'>
                    <Text
                        text={ props.descriptionText }
                        color={ props.fontColor }
                        fontSize={ 14 }
                    />
                </div>
            </div>
        </div>
    );
}

export default Card;