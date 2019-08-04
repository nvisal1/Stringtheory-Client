import React, {Component} from 'react';
import Text from '../text/text';
import Button from '../button/button';
import './navbar.css';

interface NavbarState {
    isLoggedIn: boolean;
}

export class Navbar extends Component<{}, NavbarState> {

    render() {
        return (
            <div className='navbar'>
                <div className='navbar__logo'>
                    <Text 
                        text='Stringtheory'
                        color='white'
                        fontSize={18}
                    />
                </div>
                <div className='navbar__button'>
                    <Button 
                        text='Start'
                        borderColor='white'
                        borderWidth={2}
                        height={30}
                        width={128}
                    />
                </div>
            </div>
        );
    }
}