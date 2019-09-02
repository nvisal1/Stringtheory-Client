import React from 'react';
import './footnote.css';
import animationData from '../../../shared/animations/animation-w400-h400.json';
import Animation from '../../components/animation/animation';
import Text from '../../../shared/components/text/text';

const FOOTNOTE_TEXT = {
    title: 'Works With Footnote',
    description: 'Use Footnote to play along with Stringtheory Lessons. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere debitis consequuntur perspiciatis et perferendis commodi, architecto sequi asperiores, nam ad incidunt ab aliquid quae deserunt ut eveniet quas, voluptates quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere debitis consequuntur perspiciatis et perferendis commodi, architecto sequi asperiores, nam ad incidunt ab aliquid quae deserunt ut eveniet quas, voluptates quaerat?',
};

const Footnote: React.FC = () => {
    return (
        <div className='home__body__footnote-container'>
            <div className='body__footnote-container__animation-container'>
                <Animation 
                    animationData={ animationData }
                    height={ 800 }
                    width={ 800 }
                    speed={ 1 }
                />
            </div>
            <div className='body__footnote-container__text-container'>
                <div className='footnote-container__text-container__header'>
                    <Text
                        text={ FOOTNOTE_TEXT.title }
                        color='white'
                        fontSize={36}
                    />
                </div>
                <div>
                    <Text
                        text={ FOOTNOTE_TEXT.description }
                        color='white'
                        fontSize={18}
                    />
                </div>
            </div>
        </div>
    );
};

export default Footnote;