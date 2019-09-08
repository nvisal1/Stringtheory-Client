import React, { Component } from 'react';
import CoursePanel from './components/course-panel/course-panel';
import './curriculum.css';
import CourseDashboard from './components/course-dashboard/course-dashboard';
import { connect } from 'react-redux';
import { loadCourses } from '../../actions';
import { Course } from '../../shared/interfaces';
import courses from '../../reducers/courses';

interface CurriculumState {
    selectedCourse: Course,
}

interface CurriculumProps {
    courses: Course[];
    isLoading: boolean;
    error: string;
}

class Curriculum extends Component<any, CurriculumState> {

    componentDidMount() {
        this.props.loadCourses();
    }

    handleSelectCourse = (course: Course) => {
        this.setState({ selectedCourse: course });
    }

    render() {
        return (
            <div className='curriculum'>
                <CourseDashboard 
                    onSelectCourse={this.handleSelectCourse} 
                    courses={this.props.courses}
                />
                <CoursePanel/>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        courses: state.courses.courses,
        isLoading: state.courses.isLoading,
        error: state.courses.error,
    }
};

export default connect(mapStateToProps, { loadCourses })(Curriculum);