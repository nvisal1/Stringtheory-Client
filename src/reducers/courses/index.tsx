import { SET_COURSE_ERROR, SET_COURSES, LOAD_COURSES_REQUEST } from "../../actions/constants";
import { CoursesState } from "./types";

const INITIAL_STATE: CoursesState = {
    courses: [],
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
                courses: action.courses,
            });
        case SET_COURSE_ERROR:
            return({
                isLoading: false,
                error: action.error,
                courses: [],
            });
        default: 
            return state;
    }
};
