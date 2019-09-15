import React, {Component} from 'react';
import Text from '../text/text';
import Button from '../button/button';
import './navbar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../../actions';

interface NavbarProps {
    isLoggedIn: boolean;
    logout: Function;
}

class Navbar extends Component<NavbarProps, any> {

    renderRightSideButtons() {
        if (this.props.isLoggedIn) {
            return (
                <div className='navbar__button'>
                    <div onClick={ () => this.props.logout() }>
                        <Button
                            text='Logout'
                            borderColor='white'
                            borderWidth={2}
                            height={30}
                            width={128}
                            fontColor='white'
                            backgroundColor='transparent'
                        />
                    </div>
                </div>
            );
        }
        return (
            <div className='navbar__button'>
                <Link to='/login' style={{ textDecoration: 'none' }}>
                    <Button 
                        text='Login'
                        borderColor='white'
                        borderWidth={2}
                        height={30}
                        width={128}
                        fontColor='white'
                        backgroundColor='transparent'
                    />
                </Link>
            </div>
        );
    }

    render() {
        return (
            <div className='navbar'>
                <div className='navbar__logo'>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Text 
                            text='Stringtheory'
                            color='white'
                            fontSize={18}
                        />
                    </Link>
                </div>
                { this.renderRightSideButtons() }
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    };
}

export default connect(mapStateToProps, { logout })(Navbar);
