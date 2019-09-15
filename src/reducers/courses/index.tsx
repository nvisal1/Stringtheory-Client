import { SET_COURSE_ERROR, SET_COURSES, LOAD_COURSES_REQUEST, SELECT_EXERCISE } from "../../actions/constants";
import { CoursesState } from "./types";
import { Exercise } from "../../shared/interfaces";

const INITIAL_STATE: CoursesState = {
    courses: [],
    selectedExercise: {} as Exercise,
    isLoading: false,
    error: '',
};  

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case LOAD_COURSES_REQUEST: 
            return ({
                ...state,
                isLoading: true,
            });
        case SET_COURSES:
            return ({
                isLoading: false,
                error: '',
                selectedExercise: {} as Exercise,
                courses: action.courses,
            });
        case SET_COURSE_ERROR:
            return({
                isLoading: false,
                error: action.error,
                selectedExercise: {} as Exercise,
                courses: [],
            });
        case SELECT_EXERCISE:
            console.log(action);
            return({
                ...state,
                selectedExercise: action.exercise,
            })
        default: 
            return state;
    }
};
