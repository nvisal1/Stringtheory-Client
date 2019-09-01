import React, { Component } from 'react';
import Text from '../../shared/components/text/text';
import Input from '../components/input/input';
import Button from '../../shared/components/button/button';
import './register.css';
import AlternateLink from '../components/alternate-link/alternate-link';
import { connect } from 'react-redux';
import { reduxForm, WrappedFieldProps, Field } from 'redux-form';
import { register } from '../../../actions';
import { RegisterParams } from '../../../shared/interfaces';

const HEADER_TEXT = 'Register';

const INPUT_FIELD_PLACEHOLDER_TEXT = {
    Username: 'Username',
    Password: 'Password',
    Confirm: 'Confirm Password',
}

const BUTTON_TEXT = 'Join!';

const ALTERNATE_LINK_TEXT = 'Login';

class Register extends Component<any, any> {

    onSubmit = (formValues: any) => {
        const registerParams: RegisterParams = {
            ...formValues
        }
        this.props.register(registerParams);
    }

    renderHeaderError = (error: string) => {
        return (
            <Text 
                text={error}
                color='red'
                fontSize={15}
            />
        )
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
                    type={formProps.input!.name}
                />
                {this.renderError(formProps.meta)}
            </div>
        );
    };

    render() {
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
                    {this.renderHeaderError(this.props.authError)}
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <div className='register__card__input-fields-container'>
                            <div className='input-fields__input-container'>
                                <Field 
                                    name='Name'
                                    component={this.renderInput}
                                    label='name'
                                />
                            </div>
                            <div className='input-fields__input-container'>
                                <Field 
                                    name='Email'
                                    component={this.renderInput}
                                    label='email'
                                />
                            </div>
                            <div className='input-fields__input-container'>
                                <Field 
                                    name='Username'
                                    component={this.renderInput}
                                    label='username'
                                />
                            </div>
                            <div className='input-fields__input-container'>
                                <Field 
                                    name='Password'
                                    component={this.renderInput}
                                    label='password'
                                />
                            </div>
                            <div className='input-fields__input-container'>
                                <Field 
                                    name='Password'
                                    component={this.renderInput}
                                    label='confirm'
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
                            <AlternateLink
                                text={ALTERNATE_LINK_TEXT}
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return { 
        isLoading: state.auth.isLoading,
        authError: state.auth.error,
    };
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

    if (!formValues.Username) {
        errors.Username = 'Please enter a username.';
    }

    if (!formValues.Password) {
        errors.Password = 'Please provide a password.';
    }

    return errors;
}

export default connect(mapStateToProps, { register })(reduxForm({
    form: 'register',
    validate,
})(Register));