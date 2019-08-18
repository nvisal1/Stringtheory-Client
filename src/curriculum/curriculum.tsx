import React from 'react';
import CoursePanel from './components/course-panel/course-panel';
import './curriculum.css';
import CourseDashboard from './components/course-dashboard/course-dashboard';

const Curriculum: React.FC = () => {
    return (
        <div className='curriculum'>
            <CourseDashboard />
            <CoursePanel />
        </div>
    );
}

export default Curriculum;