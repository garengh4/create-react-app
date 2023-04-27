import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { callGetUsersAPI, userAction } from "../actions/userAction"




export function Login() {

    let userInfo = useSelector(state => state.userInfo);
    let loggedInUser = userInfo.loggedInUser;
    let errorMessage = userInfo.errorMessage;
    let dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        if (loggedInUser.userName) navigate("/todos")
    }, [loggedInUser])

    useEffect(() => {
        dispatch(userAction('resetUserErrorMessage',{}))
    }, [loggedInUser])

    let [login, setLogin] = useState({ username: '', password: '' }); //internal state of whatever user typed in form
    let [formSubmitted, setFormSubmitted] = useState(false);

    const submitForm = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        dispatch(callGetUsersAPI(login.username, login.password));
    }

    const handleChange = (formField) => {
        return (event) => {
            setLogin({ ...login, [formField]: event.target.value });
            if (formSubmitted) setFormSubmitted(false);
        }
    }

    return (
        <div className="container">
            <div className="col-6 offset-3">
                <div className="card border-primary">
                    <div className="card-header bg-primary text-light">Login Form</div>
                    <div className="card-body">
                        <form onSubmit={submitForm}>
                            <div className="mb-3">
                                <label>Username</label>
                                <input className="form-control" type="text" value={login.username} onChange={handleChange('username')} />
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input className="form-control" type="text" value={login.password} onChange={handleChange('password')} />
                            </div>
                            <button className="btn btn-primary" type="submit">Log in</button>
                        </form>
                        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                    </div>
                </div>
            </div>
        </div>
    )

}