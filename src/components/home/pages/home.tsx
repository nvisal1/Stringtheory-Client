import React from 'react';
import './home.css';

import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Body from '../components/body/body';
import Action from '../components/action/action';


const Home: React.FC = () => {
    return (
        <div className='home'>
            <Header />
            <Body />
            <Action />
            <Footer/>
        </div>
    );
}

export default Home;