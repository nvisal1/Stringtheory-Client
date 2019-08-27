import React from 'react';
import './home.css';
import header from '../shared/images/header.png';
import VideoPlayer from './components/header/video-player/video-player';
import TextDisplay from './components/header/text-display/text-display';
import Text from '../shared/components/text/text';
import Footer from './components/footer/footer';

const HEADER_TEXT = {
    heading: 'Behold Electric Guitar',
    sub: 'Learn how to play electric guitar at your own pace',
    buttonText: 'Sign up for Stringtheory',
}

const BODY_TEXT = {
    display: 'Learn electric guitar the right way',
    action: 'For those about to rock...',
}

const Home: React.FC = () => {
    return (
        <div className='home'>
            <div className='home__header'>
                <img 
                    className='home__header__image'
                    src={header}
                    alt='header'
                />
                <div className='home__header__content'>
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
            <div className='home__body'>
                <div className='home__body__title'>
                    <Text
                        text={BODY_TEXT.display}
                        color='#4B37FF'
                        fontSize={36}
                    />
                </div>
            </div>
            <div className='home__action'>
                <div className='home__action__title'>
                    <Text
                        text={BODY_TEXT.action}
                        color='#4B37FF'
                        fontSize={36}
                    />
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Home;