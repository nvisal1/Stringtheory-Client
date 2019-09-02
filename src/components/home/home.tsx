import React from 'react';
import './home.css';
import header from '../shared/images/header.png';
import body from '../shared/images/home-body-background.png';
import VideoPlayer from './components/header/video-player/video-player';
import TextDisplay from './components/header/text-display/text-display';
import Text from '../shared/components/text/text';
import Footer from './components/footer/footer';
import Lottie from 'react-lottie'
import animationData from '../shared/animations/animation-w400-h400.json';

const HEADER_TEXT = {
    heading: 'Behold Electric Guitar',
    sub: 'Learn how to play electric guitar at your own pace',
    buttonText: 'Sign up for Stringtheory',
}

const BODY_TEXT = {
    display: 'Learn electric guitar the right way',
    footnote: 'Works With Footnote',
    footnoteDescription: 'Use Footnote to play along with Stringtheory Lessons. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere debitis consequuntur perspiciatis et perferendis commodi, architecto sequi asperiores, nam ad incidunt ab aliquid quae deserunt ut eveniet quas, voluptates quaerat?',
    action: 'For those about to rock...',
}

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
};

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
                    {/* <div className='header__content__video'>
                        <VideoPlayer/>
                    </div> */}
                </div>
            </div>
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

                        </div>
                        <div className='home__body__card-2'>

                        </div>
                        <div className='home__body__card-3'>

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