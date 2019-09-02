import React from 'react';
import './body.css';
import body from '../../../shared/images/home-body-background.png';
import card1Data from '../../../shared/animations/animation-w500-h500.json';
import card2Data from '../../../shared/animations/animation-w800-h600.json';
import card3Data from '../../../shared/animations/animation-w1000-h1000.json';
import Text from '../../../shared/components/text/text';
import Lottie from 'react-lottie';
import animationData from '../../../shared/animations/animation-w400-h400.json';

const BODY_TEXT = {
    display: 'Learn electric guitar the right way',
    footnote: 'Works With Footnote',
    footnoteDescription: 'Use Footnote to play along with Stringtheory Lessons. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere debitis consequuntur perspiciatis et perferendis commodi, architecto sequi asperiores, nam ad incidunt ab aliquid quae deserunt ut eveniet quas, voluptates quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere debitis consequuntur perspiciatis et perferendis commodi, architecto sequi asperiores, nam ad incidunt ab aliquid quae deserunt ut eveniet quas, voluptates quaerat?',
}

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
};

const Body: React.FC = () => {
    return (
        <div className='home__body'>
            <div className='home__body__title'>
                <Text
                    text={BODY_TEXT.display}
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
                    <div className='home__body__card-1'>
                        <Lottie options={{...defaultOptions, animationData: card1Data}}
                            height={120}
                            width={120}
                            speed={10}
                            isClickToPauseDisabled
                        />
                        <div className='body__card__content-container'>
                            <div className='body__card__header'>
                                <Text
                                    text='Track your progress'
                                    color='#4B37FF'
                                    fontSize={24}
                                />
                            </div>
                            <div className='body__card__description'>
                                <Text
                                    text='View all pending and completed courses in your dashboard, anytime, anywhere'
                                    color='#4B37FF'
                                    fontSize={14}
                                />
                            </div>
                        </div>
                        
                    </div>
                    <div className='home__body__card-2'>
                        <div className='body__card__content-container '>
                            <Lottie options={{...defaultOptions, animationData: card2Data}}
                                height={120}
                                width={120}
                                speed={10}
                                isClickToPauseDisabled
                            />
                            <div className='body__card__header'>
                                <Text
                                    text='Interactive Exercises'
                                    color='white'
                                    fontSize={24}
                                />
                            </div>
                            <div className='body__card__description'>
                                <Text
                                    text='Don’t just watch from the sidelines. Play along with every exercise.'
                                    color='white'
                                    fontSize={14}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='home__body__card-3'>
                        <div className='body__card__content-container '>
                            <Lottie options={{...defaultOptions, animationData: card3Data}}
                                height={120}
                                width={120}
                                speed={10}
                                isClickToPauseDisabled
                            />
                            <div className='body__card__header'>
                                <Text
                                    text='Tons of Lessons'
                                    color='#4B37FF'
                                    fontSize={24}
                                />
                            </div>
                            <div className='body__card__description'>
                                <Text
                                    text='Go from beginner to expert. Replay lessons at your leisure.'
                                    color='#4B37FF'
                                    fontSize={14}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home__body__footnote-container'>
                <div className='body__footnote-container__animation-container'>
                    <Lottie options={defaultOptions}
                        height={800}
                        width={800}
                        speed={10}
                        isClickToPauseDisabled
                    />
                </div>
                <div className='body__footnote-container__text-container'>
                    <div className='footnote-container__text-container__header'>
                        <Text
                            text={BODY_TEXT.footnote}
                            color='white'
                            fontSize={36}
                        />
                    </div>
                    <div>
                        <Text
                            text={BODY_TEXT.footnoteDescription}
                            color='white'
                            fontSize={18}
                        />
                    </div>
                </div>
            </div>
    </div>
    );
};

export default Body;