// we are creating functions that return action objects
// these are called action generators; we DO NOT necessarily need to use them 
// we can directly create action objects ourselves in the code
import axios from 'axios';
import bcrypt from 'bcryptjs';

export function userAction(type, data) {
    return { type, ...data };
}

export function callGetUsersAPI(username, password) {
    return (dispatch) => {
        // reset error message if any 
        dispatch(userAction('resetUserErrorMessage', {}));
        axios.get("http://localhost:4000/users")
            .then(response => {
                let users = response.data;
                let userFound = users.find(user => user.username === username);
                if (userFound && bcrypt.compareSync(password, userFound.password)) {
                    dispatch(userAction('loginSuccess', { loggedInUser: userFound }));
                } else {
                    dispatch(userAction('loginAttemptFailure', { usernameAttempted: username }));
                }
            }).catch(err => dispatch(userAction('setUserErrorMessage', { errorMessage: 'Could not connect to the server to verify credentials; try later' })));

    }
}