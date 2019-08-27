import React from 'react';
import './exercise-title.css';

interface ExerciseTitleProps {
    title: string;
}

const ExerciseTitle: React.FC<ExerciseTitleProps> = props => {
    return (
        <div className='exercise-title'>
            { props.title }
        </div>
    );
}

export default ExerciseTitle;