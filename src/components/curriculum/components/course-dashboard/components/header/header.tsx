import React from 'react';
import './header.css';

const Header: React.FC = () => {
    return (
        <div className='header'>
            <div className='header__heading-text'>
                Hey, Nick
            </div>
            <div className='header__sub-text'>
                Let's pick up where you left off!
            </div>
            <div className='header__search-bar'>
                <input
                    className='header__search-bar__element'
                    placeholder='Search your courses'
                />
            </div>
        </div>
    )
}

export default Header;