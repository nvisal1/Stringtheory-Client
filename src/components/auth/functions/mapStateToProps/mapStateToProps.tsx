export const mapStateToProps = (state: any) => {
    return { 
        isLoading: state.auth.isLoading,
        authError: state.auth.error,
    };
}