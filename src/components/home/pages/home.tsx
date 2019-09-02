import React from 'react';
import './home.css';

import Footer from '../sections/footer/footer';
import Header from '../sections/header/header';
import Features from '../sections/features/features';
import Footnote from '../sections/footnote/footnote';
import Action from '../sections/action/action';


const Home: React.FC = () => {
    return (
        <div className='home'>
            <Header />
            <Features />
            <Footnote />
            <Action />
            <Footer/>
        </div>
    );
}

export default Home;