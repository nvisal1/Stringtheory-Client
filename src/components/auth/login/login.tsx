import React from 'react';
import './login.css';
import Text from '../../shared/components/text/text';
import Input from '../components/input/input';
import Button from '../../shared/components/button/button';
import AlternateLink from '../components/alternate-link/alternate-link';
import { Field, reduxForm, WrappedFieldProps, InjectedFormProps } from 'redux-form';
import { login } from '../../../actions';
import { LoginParams } from '../../../shared/interfaces';

const HEADER_TEXT = 'Login';

const BUTTON_TEXT = 'Login';

const ALTERNATE_LINK_TEXT = 'Register';

const onSubmit = (formValues: any) => {
    const loginParams: LoginParams = {
        ...formValues
    }
    console.log(loginParams);
    login(loginParams);
}

const renderInput: React.ComponentType<Partial<WrappedFieldProps>> = (formProps) => {
    return (<Input value={formProps.input!.value} onChange={formProps.input!.onChange} placeholder={formProps.input!.name} />);
};

const Login: React.FC<InjectedFormProps> = props => {
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
                <form onSubmit={props.handleSubmit(onSubmit)}>
                    <div className='login__card__input-fields-container'>
                        <div className='input-fields__input-container'>
                            <Field 
                                name='username'
                                component={renderInput}
                                label='username'
                                type='text'
                            />
                        </div>
                        <div className='input-fields__input-container'>
                            <Field 
                                name='password'
                                component={renderInput}
                                label='password'
                                type='password'
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
                </form>
            </div>
        </div>
    );
}

// const validate = (formValues) => {
//     const errors = {
//         username: string,
//         password: string,
//     };

//     if (!formValues.username) {
//         errors.username = 'Please enter a username.';
//     }

//     if (!formValues.password) {
//         errors.password = 'Please provide a password.';
//     }

//     return errors;
// }

export default reduxForm({
    form: 'login',
    // validate,
})(Login);