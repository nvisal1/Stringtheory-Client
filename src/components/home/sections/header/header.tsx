import React from 'react';
import './header.css';
import VideoPlayer from '../../components/video-player/video-player';
import TextDisplay from '../../components/text-display/text-display';
import header from '../../../shared/images/header.png';

const HEADER_TEXT = {
    heading: 'Behold Electric Guitar',
    sub: 'Learn how to play electric guitar at your own pace',
    buttonText: 'Sign up for Stringtheory',
}

const Header: React.FC = () => {
    return (
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
                {/* <div className='header__content__video'>
                    <VideoPlayer/>
                </div> */}
            </div>
        </div>
    )
};

export default Header;

