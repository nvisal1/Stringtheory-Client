import React from 'react';
import './features.css';
import Text from '../../../shared/components/text/text';
import body from '../../../shared/images/home-body-background.png';
import card1Data from '../../../shared/animations/animation-w500-h500.json';
import card2Data from '../../../shared/animations/animation-w800-h600.json';
import card3Data from '../../../shared/animations/animation-w1000-h1000.json';
import Card, { CardProps } from '../../components/card/card';

const FEATURES_TEXT = {
    display: 'Learn electric guitar the right way',
};

const cardMetaDataList: CardProps[]= [
    {
        animationData: card1Data,
        headerText: 'Track your Progress',
        descriptionText: 'View all pending and completed courses in your dashboard, anytime, anywhere',
        fontColor: '#4B37FF',
        backgroundColor: 'white',
    },
    {
        animationData: card2Data,
        headerText: 'Interactive Exercises',
        descriptionText: 'Don’t just watch from the sidelines. Play along with every exercise.',
        fontColor: 'white',
        backgroundColor: '#4B37FF',
    },
    {
        animationData: card3Data,
        headerText: 'Tons of Lessons',
        descriptionText: 'Go from beginner to expert. Replay lessons at your leisure.',
        fontColor: '#4B37FF',
        backgroundColor: 'white',    
    }
];

const renderCardList = () => {
    const cards = cardMetaDataList.map((cardMetaData, index) => {
        const position = index + 1;
        const length = cardMetaDataList.length + 1;
        const style = {
            gridRowStart: length - position,
            gridColumnStart: position,
        };

        return (
            <div style={ style }>
                <Card
                    { ...cardMetaData }
                />
            </div>
        );
    });
    return cards;
}

const Features: React.FC = () => {
    return (
        <div className='features'>
            <div className='features__title'>
                <Text
                    text={FEATURES_TEXT.display}
                    color='#4B37FF'
                    fontSize={48}
                />
            </div>
            <div className='features__feature-container'>
                <img 
                    className='features__feature-container__image'
                    src={body}
                    alt='features'
                />
                <div className='features__feature-container__card-container'>
                    { renderCardList() }
                </div>
            </div>
        </div>
    );
};

export default Features;