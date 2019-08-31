import { UserInfo } from "../../shared/interfaces";


export interface AuthState {
    isLoggedIn: boolean;
    isLoading: boolean;
    userInfo: UserInfo;
    error: string;
}