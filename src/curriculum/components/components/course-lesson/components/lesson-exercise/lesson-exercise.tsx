import React from 'react';
import './lesson-exercise.css';
import CompletionStatus from './components/completion-status/completion-status';
import Score from './components/score/score';
import ExerciseTitle from './components/exercise-title/exercise-title';

interface LessonExerciseProps {
    exercise: {};
}

const LessonExercise: React.FC = props => {
    return (
        <div className='lesson-exercise'>
            <CompletionStatus />
            <ExerciseTitle 
                title='Exercise Title'
            />
            <Score />
        </div>
    );
}

export default LessonExercise;