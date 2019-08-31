import React, { Component } from 'react';
import './login.css';
import Text from '../../shared/components/text/text';
import Input from '../components/input/input';
import Button from '../../shared/components/button/button';
import AlternateLink from '../components/alternate-link/alternate-link';
import { Field, reduxForm, WrappedFieldProps, InjectedFormProps } from 'redux-form';
import { login } from '../../../actions';
import { LoginParams } from '../../../shared/interfaces';
import { connect } from 'react-redux';
import { directive } from '@babel/types';

const HEADER_TEXT = 'Login';

const BUTTON_TEXT = 'Login';

const ALTERNATE_LINK_TEXT = 'Register';

class Login extends Component<any, any> {

    onSubmit = (formValues: any) => {
        const loginParams: LoginParams = {
            ...formValues
        }
        this.props.login(loginParams);
    }

    renderError = (meta: any) => {
        if (meta.visited) {
            return (
                <Text
                    text={meta.error}
                    color='black'
                />
            );
        }
    }

    renderInput = (formProps: WrappedFieldProps) => {
        return (
            <div>
                <Input 
                    value={formProps.input!.value}
                    onChange={formProps.input!.onChange}
                    onFocus={formProps.input!.onFocus}
                    placeholder={formProps.input!.name}
                />
                {this.renderError(formProps.meta)}
            </div>
        );
    };

    render() {
        if (!this.props.isLoading) {
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
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <div className='login__card__input-fields-container'>
                                <div className='input-fields__input-container'>
                                    <Field 
                                        name='Username'
                                        component={this.renderInput}
                                        label='username'
                                        type='text'
                                    />
                                </div>
                                <div className='input-fields__input-container'>
                                    <Field 
                                        name='Password'
                                        component={this.renderInput}
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
        } else {
            return (<div>Loading</div>)
        }
    }
}

const mapStateToProps = (state: any) => {
    return { isLoading: state.auth.isLoading };
}

const validate = (formValues: any) => {
    const errors = {
        Username: '',
        Password: '',
    };

    if (!formValues.Username) {
        errors.Username = 'Please enter a username.';
    }

    if (!formValues.Password) {
        errors.Password = 'Please provide a password.';
    }

    return errors;
}

export default connect(mapStateToProps, { login })(reduxForm({
    form: 'login',
    validate,
})(Login));