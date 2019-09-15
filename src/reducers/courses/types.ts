import { Course, Exercise } from '../../shared/interfaces';

export interface CoursesState {
    isLoading: boolean;
    courses: Course[];
    selectedExercise: Exercise;
    error: string;
}