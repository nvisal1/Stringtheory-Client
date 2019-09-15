import React from 'react';
import './course-panel.css';
import CourseTitle from '../components/course-title/course-title';
import CourseDescription from '../components/course-description/course-description';
import { Course, Lesson } from '../../../../shared/interfaces';
import { DashboardCourse } from '../../curriculum';
import CourseLesson from '../components/course-lesson/course-lesson';

interface CoursePanelProps { 
    onSelectLesson: Function;
    selectedCourse: DashboardCourse;
}

const renderCourseLessons = (props: CoursePanelProps) => {
    const courseLessons = props.selectedCourse.Lessons.map(lesson => {
        return (
            <div className='course-lesson-container'>
                <CourseLesson 
                    onSelectLesson={ props.onSelectLesson }
                    lesson={ lesson }
                />
            </div>
        );
    });
    return courseLessons;
}

const CoursePanel: React.FC<CoursePanelProps> = props => {
    return (
        <div className='course-panel'>
            <div className='course-panel__course-title-container'>
                <CourseTitle 
                    title={ props.selectedCourse.Name }
                />
            </div>
            <div className='course-panel__course-description-container'>
                <CourseDescription 
                    description={ props.selectedCourse.Description }
                />
            </div>
            { renderCourseLessons(props) }
        </div>
    )
}

export default CoursePanel;