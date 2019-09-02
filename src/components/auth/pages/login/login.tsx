import React, { Component } from 'react';
import './login.css';
import Text from '../../../shared/components/text/text';
import Button from '../../../shared/components/button/button';
import AlternateLink from '../../components/alternate-link/alternate-link';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../../../actions';
import { LoginParams } from '../../../../shared/interfaces';
import { connect } from 'react-redux';
import { renderHeaderError, renderInput } from '../../functions';
import { validate } from '../../form-validators';
import { mapStateToProps } from '../../functions/mapStateToProps/mapStateToProps';

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

    render() {
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
                    {renderHeaderError(this.props.authError)}
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <div className='login__card__input-fields-container'>
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
                        </div>
                        <div className='login__card__button-container'>
                            <Button 
                                text={BUTTON_TEXT}
                                height={82}
                                width={217}
                                backgroundColor='#6769EC'
                                fontColor='white'
                                fontSize={24}
                                isLoading={this.props.isLoading}
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
}

export default connect(mapStateToProps, { login })(reduxForm({
    form: 'login',
    validate,
})(Login));