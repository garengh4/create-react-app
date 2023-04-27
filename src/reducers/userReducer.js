export function userReducer(state={
        loggedInUser:{username:'',password:'',role:''},
        errorMessage:''
    },action){
    switch (action.type){
        case 'loginSuccess': return {errorMessage:'',loggedInUser:action.loggedInUser};
        case 'logout': return {errorMessage:'',loggedInUser:{username:'',password:'',role:''}};
        case 'loginAttemptFailure': return {errorMessage:'Invalid Credentials for '+action.usernameAttempted,
                            loggedInUser:{username:'',password:'',role:''}};
        case 'resetLoggedInUser': return {...state, loggedInUser:{username:'',password:'',role:''}};
        case 'resetUserErrorMessage': return {...state, errorMessage:''};
        case 'setUserErrorMessage': return {...state,errorMessage:action.errorMessage};
        default: return {...state};
    }
}