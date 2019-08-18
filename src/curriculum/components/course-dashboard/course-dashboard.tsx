import React from 'react';
import './course-dashboard.css';
import Header from './components/header/header';
import Courses from './components/courses/courses';

const CourseDashboard: React.FC = () => {
    return (
        <div className='course-dashboard'>
            <Header />
            <Courses />
        </div>
    );
}

export default CourseDashboard;