import React from 'react';
import './action.css';
import Text from '../../../shared/components/text/text';
import Button from '../../../shared/components/button/button';
import bottom from '../../../shared/images/home-body-background-bottom.png';
import { Link } from 'react-router-dom';

const ACTION_TEXT = {
    prompt: 'For those about to rock...',
    button: 'Start your journey',
};

const Action: React.FC = () => {
    return (
        <div className='action'>
            <img 
                className='action__image'
                src={bottom}
                alt='action'
            />
            <div className='action__title'>
                <Text
                    text={ACTION_TEXT.prompt}
                    color='#4B37FF'
                    fontSize={36}
                />
            </div>
            <div className='action__button'>
                <Link to='/register' style={{ textDecoration: 'none' }}>
                    <Button 
                        text={ACTION_TEXT.button}
                        height={86}
                        width={300}
                        backgroundColor='#4B37FF'
                        fontColor='white'
                        fontSize={24}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Action;