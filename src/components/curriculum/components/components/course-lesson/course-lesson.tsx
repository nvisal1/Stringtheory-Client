import React from 'react';
import './course-lesson.css'
import LessonTitle from './components/lesson-title/lesson-title';
import LessonExercise from './components/lesson-exercise/lesson-exercise';

interface CourseLessonProps {
    lesson: {},
}

const CourseLesson: React.FC = props => {
    return (
        <div className='course-lesson'>
            <LessonTitle 
                title='Lesson Title'
            />
            <div className='course-lesson__lesson-exercise-container'>
                <LessonExercise />
            </div>
        </div>
    )
}

export default CourseLesson;