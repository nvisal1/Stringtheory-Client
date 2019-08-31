import React from 'react';
import './player.css';
import Text from '../../../shared/components/text/text';
import Strings from './components/strings/strings';
import StatBox from './components/statbox/statbox';
import Button from '../../../shared/components/button/button';

const Player: React.FC = () => {
    return (
        <div className='player'>
            <div className='player__text-container'>
                <Text 
                    text='Play an A note'
                    color='white'
                    fontSize={48}
                />
            </div>
            <div className='player__strings-container'>
                <Strings />
            </div>
            <div className='player__stat-box-container'>
                <StatBox />
            </div>
            <div className='player__button-container'>
                <Button 
                    text='Finish Exercise'
                    height={47}
                    width={202}
                    fontColor='#4B37FF'
                />
            </div>
        </div>
    );
}

export default Player;