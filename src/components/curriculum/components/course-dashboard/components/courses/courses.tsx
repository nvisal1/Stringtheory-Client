import React from 'react';
import './courses.css';
import { Course } from '../../../../../../shared/interfaces';

interface CoursesProps {
    onSelectCourse: Function;
    courses: Course[];
}

const renderCourseCards = (props: CoursesProps) => {
    const cards = props.courses.map(course => {
        return (
            <div 
                className='courses__cards__card'
                onClick={ () => props.onSelectCourse(course)}
            >
                { course.Name }
            </div>
        );
    });
    return cards;
};

const Courses: React.FC<CoursesProps> = props => {
    return (
        <div className='courses'>
            <div className='courses__title'>
                Courses
            </div>
            { renderCourseCards(props) }
        </div>
    )
}

export default Courses;