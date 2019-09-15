export interface LoginParams {
    username: string;
    password: string;
}

export interface RegisterParams {
    username: string;
    password: string;
    email: string;
    name: string;
}

export interface UserInfo {
    Username: string;
    Name: string;
    Email: string;
}

export interface Course {
    ID: string;
    Name: string;
    Description: string;
    LessonsURI: string;
}

export interface Lesson {
    ID: string;
	Name: string
	Order: number;
	Description: string;
    CourseId: string;
    ExercisesURI: string;
	HasNext: boolean;
}

export interface Exercise {
    ID: string;
	Name: string;
	Order: number;
	Notes: string[];
	Description: string;
	LessonId: string;
	HasNext: boolean;
}