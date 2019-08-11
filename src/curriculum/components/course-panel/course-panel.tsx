import React from 'react';
import './course-panel.css';
import CourseTitle from '../components/course-title/course-title';
import CourseDescription from '../components/course-description/course-description';

interface CoursePanelProps { 
    title: string;
    description: string;
    exercises: string[];
}

const CoursePanel: React.FC = props => {
    return (
        <div className='course-panel'>
            <div className='course-panel__course-title-container'>
                <CourseTitle 
                    title='Course Title'
                />
            </div>
           <div className='course-panel__course-description-container'>
                <CourseDescription 
                    description='Course description that is really long'
                />
           </div>
            {/* <CourseExercise />  */}
        </div>
    )
}

export default CoursePanel;