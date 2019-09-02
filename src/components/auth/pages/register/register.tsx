import React, { Component } from 'react';
import Text from '../../../shared/components/text/text';
import Button from '../../../shared/components/button/button';
import './register.css';
import AlternateLink from '../../components/alternate-link/alternate-link';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { register } from '../../../../actions';
import { RegisterParams } from '../../../../shared/interfaces';
import { renderHeaderError, renderInput } from '../../functions';
import { validate } from '../../form-validators';
import { mapStateToProps } from '../../functions/mapStateToProps/mapStateToProps';

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
                    {renderHeaderError(this.props.authError)}
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <div className='register__card__input-fields-container'>
                            <div className='input-fields__input-container'>
                                <Field 
                                    name='Name'
                                    component={renderInput}
                                    label='name'
                                />
                            </div>
                            <div className='input-fields__input-container'>
                                <Field 
                                    name='Email'
                                    component={renderInput}
                                    label='email'
                                />
                            </div>
                            <div className='input-fields__input-container'>
                                <Field 
                                    name='Username'
                                    component={renderInput}
                                    label='username'
                                />
                            </div>
                            <div className='input-fields__input-container'>
                                <Field 
                                    name='Password'
                                    component={renderInput}
                                    label='password'
                                />
                            </div>
                            <div className='input-fields__input-container'>
                                <Field 
                                    name='Password'
                                    component={renderInput}
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

export default connect(mapStateToProps, { register })(reduxForm({
    form: 'register',
    validate,
})(Register));