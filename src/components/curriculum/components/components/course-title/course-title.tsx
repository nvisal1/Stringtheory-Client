import React from 'react';
import './course-title.css';

interface CourseTitleProps {
    title: string;
}

const CourseTitle: React.FC<CourseTitleProps> = props => {
    return (
        <div className='course-title'>
            { props.title }
        </div>
    )
}

export default CourseTitle;