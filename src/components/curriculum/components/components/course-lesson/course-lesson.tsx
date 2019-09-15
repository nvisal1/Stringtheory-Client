import React from 'react';
import './course-lesson.css'
import LessonTitle from './components/lesson-title/lesson-title';
import LessonExercise from './components/lesson-exercise/lesson-exercise';
import { Lesson, Course } from '../../../../../shared/interfaces';
import { DashboardLesson } from '../../../curriculum';

interface CourseLessonProps {
    onSelectLesson: Function;
    lesson: DashboardLesson;
}

const renderExerciseLessons = (props: CourseLessonProps) => {
    const exerciseLessons = props.lesson.Exercises.map(exercise => {
        return (
            <div className='course-lesson__lesson-exercise-container'>
                <LessonExercise 
                    exercise={ exercise }
                />
            </div>
        );
    });
    return exerciseLessons;
}

const CourseLesson: React.FC<CourseLessonProps> = props => {
    return (
        <div className='course-lesson'>
            <div
                onClick={ () => props.onSelectLesson(props.lesson) }
            >
                <LessonTitle 
                    title={ props.lesson.Name }
                />
            </div>
            { renderExerciseLessons(props) }
        </div>
    )
}

export default CourseLesson;