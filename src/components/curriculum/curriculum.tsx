import React, { Component } from 'react';
import CoursePanel from './components/course-panel/course-panel';
import './curriculum.css';
import CourseDashboard from './components/course-dashboard/course-dashboard';
import { connect } from 'react-redux';
import { loadCourses, selectExercise} from '../../actions';
import { Course, Lesson, Exercise } from '../../shared/interfaces';
import server from '../../shared/server';

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
}

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
          }
        }
    }

    componentDidMount() {
        this.props.loadCourses();
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