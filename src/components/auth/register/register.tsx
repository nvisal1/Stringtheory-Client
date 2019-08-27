import React from 'react';
import Text from '../../shared/components/text/text';
import Input from '../components/input/input';
import Button from '../../shared/components/button/button';
import './register.css';
import AlternateLink from '../components/alternate-link/alternate-link';

const HEADER_TEXT = 'Register';

const INPUT_FIELD_PLACEHOLDER_TEXT = {
    Username: 'Username',
    Password: 'Password',
    Confirm: 'Confirm Password',
}

const BUTTON_TEXT = 'Continue';

const ALTERNATE_LINK_TEXT = 'Login';

const Register: React.FC = () => {
    return (
        <div className='register'>
            <div className='register__card'>
                <div className='login__card__header'>
                    <Text 
                        text={HEADER_TEXT}
                        color='#6769EC'
                        fontSize={48}
                    />
                </div>
                <div className='register__card__input-fields-container'>
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
                    <div className='input-fields__input-container'>
                        <Input
                            placeholder={INPUT_FIELD_PLACEHOLDER_TEXT.Confirm}
                        />
                    </div>
                </div>
                <div className='register__card__button-container'>
                    <Button 
                        text={BUTTON_TEXT}
                        height={82}
                        width={217}
                        backgroundColor='#6769EC'
                        fontColor='white'
                        fontSize={24}
                    />
                </div>
                <div className='register__card-alternate-text-container'>
                    <AlternateLink
                        text={ALTERNATE_LINK_TEXT}
                    />
                </div>
            </div>
        </div>
    );
}

export default Register;