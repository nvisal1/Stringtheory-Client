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
}