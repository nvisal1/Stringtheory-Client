export const validate = (formValues: any) => {
    const errors = {
        Username: '',
        Password: '',
    };

    if (!formValues.Username) {
        errors.Username = 'Please enter a username.';
    }

    if (!formValues.Password) {
        errors.Password = 'Please provide a password.';
    }

    return errors;
}