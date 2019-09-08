import React from 'react';
import './course-dashboard.css';
import Header from './components/header/header';
import Courses from './components/courses/courses';
import { Course } from '../../../../shared/interfaces';

interface CourseDashboardProps {
    onSelectCourse: Function;
    courses: Course[];
}

const CourseDashboard: React.FC<CourseDashboardProps> = props => {
    return (
        <div className='course-dashboard'>
            <Header />
            <Courses 
                onSelectCourse={props.onSelectCourse}
                courses={props.courses}
            />
        </div>
    );
}

export default CourseDashboard;