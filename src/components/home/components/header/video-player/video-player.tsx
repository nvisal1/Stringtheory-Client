import React from 'react';
import './video-player.css';

const VideoPlayer: React.FC = () => {
    return (
        <video
            className='video'
            src='http://www.w3schools.com/html/movie.mp4'
        />
            
    );
}

export default VideoPlayer;