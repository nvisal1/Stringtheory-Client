import React from 'react';
import './features.css';
import Text from '../../../shared/components/text/text';
import body from '../../../shared/images/home-body-background.png';
import card1Data from '../../../shared/animations/animation-w500-h500.json';
import card2Data from '../../../shared/animations/animation-w800-h600.json';
import card3Data from '../../../shared/animations/animation-w1000-h1000.json';

const FEATURES_TEXT = {
    display: 'Learn electric guitar the right way',
};

const displayCards = () => {
    return 
}

const Features: React.FC = () => {
    return (
        <div>
            <div className='home__body__title'>
                <Text
                    text={FEATURES_TEXT.display}
                    color='#4B37FF'
                    fontSize={48}
                />
            </div>
            <div className='home__body__feature-container'>
                <img 
                    className='home__body__image'
                    src={body}
                />
                <div className='home__body__card-container'>
                    
                </div>
            </div>
        </div>
    );
};

export default Features;