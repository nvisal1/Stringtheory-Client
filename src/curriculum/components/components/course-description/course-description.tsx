import React from 'react';
import './course-description.css';


interface CourseDescriptionProps {
    description: string;
}

const CourseDescription: React.FC<CourseDescriptionProps> = props => {
    return (
        <div className='course-description'>
            { props.description }
        </div>
    );
}

export default CourseDescription;