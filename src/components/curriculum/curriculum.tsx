import React, { Component } from 'react';
import CoursePanel from './components/course-panel/course-panel';
import './curriculum.css';
import CourseDashboard from './components/course-dashboard/course-dashboard';
import { connect } from 'react-redux';
import { loadCourses, selectExercise} from '../../actions';
import { Course, Lesson, Exercise } from '../../shared/interfaces';
import server from '../../shared/server';
import posed from 'react-pose';

interface CurriculumProps {
    courses: Course[];
    isLoading: boolean;
    error: string;
}

export interface DashboardLesson extends Lesson {
    Exercises: Exercise[];
}

export interface DashboardCourse extends Course {
    Lessons: DashboardLesson[];
}
interface CurriculumState {
    selectedCourse: DashboardCourse,
    isVisible: boolean,
    isFinished: boolean,
}

const CircleAnimation = posed.div({
    enter: {
        scale: 50,
        transition: {
            ease: 'linear',
            duration: 1000,
        },
    },
    exit: {
        scale: 1,
    }
});

const ContentAnimation = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 1000,
        transition: {
          y: { type: 'spring', stiffness: 300, damping: 20, duration: 1000 },
          default: { duration: 300 },
        },
    },
    exit: {
        y: 30,
        opacity: 0,
        transition: { duration: 150 }
      }
});

class Curriculum extends Component<any, CurriculumState> {

    constructor(props: any) {
        super(props);

        this.state = {
          selectedCourse: {
              ID: '',
              Name: '',
              Description: '',
              LessonsURI: '',
              Lessons: [],
          },
          isVisible: false,
          isFinished: true,
        }
    }

    componentDidMount() {
        this.props.loadCourses();
        this.setState({ isVisible: true });
        setTimeout(() => {
            this.setState({ isFinished: false });
        }, 2000);
    }

    handleSelectCourse = async(course: Course) => {
        const lessons = await this.getCourseLessons(course.LessonsURI);
        const dashboardLessons = lessons.map(l => this.mapLesssontoDashboardLesson(l));
        this.setState({ selectedCourse: { ...course, Lessons: dashboardLessons } });
    }

    mapLesssontoDashboardLesson = (lesson: Lesson) => {
        return { ...lesson, Exercises: [] }
    }

    handleSelectLesson = async(selectedLesson: Lesson) => {
        const exercises = await this.getLessonExercises(selectedLesson.ExercisesURI);
        const selectedCourseLessons = this.state.selectedCourse.Lessons;
        selectedCourseLessons.forEach(lesson => {
            if (lesson.ID === selectedLesson.ID) {
                if (exercises) {
                    lesson.Exercises = exercises;
                } else {
                    lesson.Exercises = [];
                }
            }
        });
        this.setState({ selectedCourse: { 
            ...this.state.selectedCourse,
            Lessons: selectedCourseLessons,
        }});
    }

    handleSelectExericse = async(selectedExercise: Exercise) => {
        this.props.selectExercise(selectedExercise);
    }

    async getCourseLessons(lessonsURI: string): Promise<DashboardLesson[]> {
        const response = await server().get(lessonsURI);
        return response.data;
    }

    async getLessonExercises(exercisesURI: string): Promise<Exercise[]> {
        const response = await server().get(exercisesURI);
        return response.data;
    }

    render() {
        return (
            <div> 
                <div className='animation-position'>
                    {this.state.isFinished ?
                        <CircleAnimation pose={ this.state.isVisible ? 'enter' : 'exit' }>
                            <div className='animation-position__circle'></div>
                        </CircleAnimation> : <span></span>   
                    }  
                </div>
                <ContentAnimation pose={ this.state.isVisible ? 'enter' : 'exit' }>        
                    <div className='curriculum'>
                        <CourseDashboard 
                            onSelectCourse={ this.handleSelectCourse } 
                            courses={ this.props.courses }
                        />
                        <CoursePanel
                            onSelectExercise={ this.handleSelectExericse }
                            onSelectLesson={ this.handleSelectLesson }
                            selectedCourse={ this.state.selectedCourse }
                        />
                    </div>   
                </ContentAnimation> 
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        courses: state.courses.courses,
        isLoading: state.courses.isLoading,
        error: state.courses.error,
    };
};

export default connect(mapStateToProps, { loadCourses, selectExercise })(Curriculum);