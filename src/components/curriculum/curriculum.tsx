import React, { Component } from 'react';
import CoursePanel from './components/course-panel/course-panel';
import './curriculum.css';
import CourseDashboard from './components/course-dashboard/course-dashboard';
import { connect } from 'react-redux';
import { loadCourses } from '../../actions';

class Curriculum extends Component {

    render() {
        return (
            <div className='curriculum'>
                <CourseDashboard />
                <CoursePanel />
            </div>
        );
    }
}

export default connect(null, { loadCourses })(Curriculum);