import { Course } from '../../shared/interfaces';

export interface CoursesState {
    isLoading: boolean;
    courses: Course[];
    error: string;
}