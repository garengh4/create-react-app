
import axios from 'axios'
import bcrypt from 'bcryptjs'

export function userAction(type, data){
    return {type, ...data};
}

export function callGetUsersAPI(username,password){
    return(dispatch) =>{
        dispatch(userAction('resetUserErrorMessage', {}));
        axios.get("http://localhost:4000/users")
            .then(response => {
                let users = response.data;
                let userFound = users.find(user => user.username === username)
                if(userFound && bcrypt.compareSync(password, userFound.password)){  
                    dispatch(userAction('loginSuccess',{loggedInUser: userFound}))
                } else {
                    dispatch(userAction('loginAttemptFailure', {userAttempted: username})) 
                }
            }).catch(err => dispatch(userAction('setUserErrorMessage',{ errorMessage: 'Could not connect to server to verify credentials' }))) // TODO
    }
}