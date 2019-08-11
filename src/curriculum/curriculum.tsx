import React from 'react';
import CoursePanel from './components/course-panel/course-panel';
import './curriculum.css';

const Curriculum: React.FC = () => {
    return (
        <div className='curriculum'>
            <CoursePanel />
        </div>
    );
}

export default Curriculum;