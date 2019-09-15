import React, {Component} from 'react';
import Text from '../text/text';
import Button from '../button/button';
import './navbar.css';
import { Link } from 'react-router-dom';

interface NavbarState {
    isLoggedIn: boolean;
}

export class Navbar extends Component<{}, NavbarState> {

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
            </div>
        );
    }
}