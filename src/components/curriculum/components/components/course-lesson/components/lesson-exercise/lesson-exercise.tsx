import React from 'react';
import './lesson-exercise.css';
import CompletionStatus from './components/completion-status/completion-status';
import Score from './components/score/score';
import ExerciseTitle from './components/exercise-title/exercise-title';
import { Exercise } from '../../../../../../../shared/interfaces';

interface LessonExerciseProps {
    exercise: Exercise;
}

const LessonExercise: React.FC<LessonExerciseProps> = props => {
    return (
        <div className='lesson-exercise'>
            <div className='lesson-exercise__completion-status-container'>
                <CompletionStatus />
            </div>
            <div className='lesson-exercise__exercise-title-container'>
                <ExerciseTitle 
                    title={ props.exercise.Name }
                />
            </div>
            <div className='lesson-exercise__score-container'>
                <Score />
            </div>
            
        </div>
    );
}

export default LessonExercise;