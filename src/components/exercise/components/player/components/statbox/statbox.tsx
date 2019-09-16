import React from 'react';
import './statbox.css';

interface StatBoxProps {
    notes: string[];
}

const StatBox: React.FC<StatBoxProps> = props => {
    return (
        <div className='stat-box'>
            { props.notes }
        </div>
    );
}

export default StatBox;