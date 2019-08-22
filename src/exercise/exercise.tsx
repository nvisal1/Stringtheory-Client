import React from 'react';
import './exercise.css';
import Player from './components/player/player';

const Exercise: React.FC = () => {
    return (
        <div className='exercise'>
            <div className='exercise__player-container'>
                <Player />
            </div>
        </div>
    )
}

export default Exercise;