import React from 'react';
import './Home.css';
import header from '../shared/images/header.png';
import VideoPlayer from './components/header/video-player/video-player';
import TextDisplay from './components/header/text-display/text-display';

const HEADER_TEXT = {
    heading: 'Behold Electric Guitar',
    sub: 'Learn how to play electric guitar at your own pace',
    buttonText: 'Sign up for Stringtheory',
}

const Home: React.FC = () => {
    return (
        <div className="header">
            <img 
                className='header__image'
                src={header}
                alt='header image'
            />
            <div className='header__content'>
                <div className='header__content__text'>
                    <TextDisplay
                        heading={HEADER_TEXT.heading}
                        sub={HEADER_TEXT.sub}
                        buttonText={HEADER_TEXT.buttonText}
                    />
                </div>
                <div className='header__content__video'>
                    <VideoPlayer/>
                </div>
            </div>
        </div>
    );
}

export default Home;