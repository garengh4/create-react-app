import { useEffect, useState } from "react"
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { callGetUsersAPI, userAction } from "../actions/userActions";
export function LoginThree() {

    let userInfo = useSelector(state=>state.userInfo);
    let loggedInUser = userInfo.loggedInUser;
    let errorMessage = userInfo.errorMessage;
    let dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(()=>{
        if (loggedInUser.username) navigate('/todos');
    },[loggedInUser])

    useEffect(()=>{
        //  What to do at init;
        // What to do if the loggedInUser is already set? already taken care of earlier 
        dispatch(userAction('resetUserErrorMessage',{}));
    },[]);

    let [login,setLogin] = useState({username:"",password:""}); // internal state of whatever user typed in the form

    let [formSubmitted,setFormSubmitted] = useState(false);


    const submitForm = (ev)=> {
        ev.preventDefault();
        setFormSubmitted(true);
        dispatch(callGetUsersAPI(login.username,login.password));  
    }

    const handleChange = (formField) => {  // formField is username or password
        return (ev)=>{
            setLogin({...login, [formField]: ev.target.value});
            if (formSubmitted) setFormSubmitted(false);
        }
    }
    
    return (
        <div className="container">
            <div className="col-6 offset-3">
                <div className="card border-primary">
                    <div className="card-header bg-primary text-light">
                        Login Form
                    </div>
                    <div className="card-body">
                        <form onSubmit={submitForm}>
                            <div className="mb-3">
                                <label>Username</label>
                                <input 
                                    onChange={handleChange("username")}
                                    value={login.username}
                                    type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input 
                                    onChange={handleChange("password")}
                                    value={login.password}
                                    type="password" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Log In
                            </button>
                            
                        </form>

                        { errorMessage && 
                        <div className="alert alert-danger">
                            {errorMessage}
                        </div> }
                    </div>
                </div>
            </div>
        </div>
    )
}