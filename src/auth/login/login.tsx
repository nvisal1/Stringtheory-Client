import React from 'react';
import './login.css'
import Text from '../../shared/components/text/text';
import Input from '../components/input/input';
import Button from '../../shared/components/button/button';
import AlternateLink from '../components/alternate-link/alternate-link';

const HEADER_TEXT = 'Login';

const INPUT_FIELD_PLACEHOLDER_TEXT = {
    Username: 'Username',
    Password: 'Password',
}

const BUTTON_TEXT = 'Login';

const ALTERNATE_LINK_TEXT = 'Register';

const Login: React.FC = () => {
    return (
        <div className='login'>
            <div className='login__card'>
                <div className='login__card__header'>
                    <Text 
                        text={HEADER_TEXT}
                        color='#6769EC'
                        fontSize={48}
                    />
                </div>
                <div className='login__card__input-fields-container'>
                    <div className='input-fields__input-container'>
                        <Input
                            placeholder={INPUT_FIELD_PLACEHOLDER_TEXT.Username}
                        />
                    </div>
                    <div className='input-fields__input-container'>
                        <Input
                            placeholder={INPUT_FIELD_PLACEHOLDER_TEXT.Password}
                        />
                    </div>
                </div>
                <div className='login__card__button-container'>
                    <Button 
                        text={BUTTON_TEXT}
                        height={82}
                        width={217}
                        backgroundColor='#6769EC'
                        fontColor='white'
                        fontSize={24}
                    />
                </div>
                <div className='login__card-alternate-text-container'>
                    <AlternateLink
                        text={ALTERNATE_LINK_TEXT}
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;