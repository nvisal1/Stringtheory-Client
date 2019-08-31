export interface AuthState {
    isLoggedIn: boolean;
    isLoading: boolean;
    userInfo: {
        username: string;
        name: string;
        email: string;
    }
}