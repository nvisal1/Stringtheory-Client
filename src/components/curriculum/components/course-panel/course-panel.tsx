import React from 'react';
import './course-panel.css';
import CourseTitle from '../components/course-title/course-title';
import CourseDescription from '../components/course-description/course-description';
import { DashboardCourse } from '../../curriculum';
import CourseLesson from '../components/course-lesson/course-lesson';
import posed from 'react-pose';

interface CoursePanelProps { 
    onSelectLesson: Function;
    onSelectExercise: Function;
    selectedCourse: DashboardCourse;
}

const ContentAnimation = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 300,
        transition: {
          y: { type: 'spring', stiffness: 300, damping: 12 },
          default: { duration: 300 }
        }
    },
    exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 150 }
      }
});

const renderCourseLessons = (props: CoursePanelProps) => {
    const courseLessons = props.selectedCourse.Lessons.map(lesson => {
        return (
            <div className='course-lesson-container'>
                <CourseLesson 
                    onSelectLesson={ props.onSelectLesson }
                    onSelectExercise={ props.onSelectExercise }
                    lesson={ lesson }
                />
            </div>
        );
    });
    return courseLessons;
}

const CoursePanel: React.FC<CoursePanelProps> = props => {
    let isVisible = false;
    isVisible = true;
    return (
        <div className='course-panel'>
            <ContentAnimation pose={ isVisible ? 'enter' : 'exit'}>
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
            </ContentAnimation>
        </div>
    )
}

export default CoursePanel;