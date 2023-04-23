

// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from "react";

export function Login() {

    let [login, setLogin] = useState({ username: "", password: "" });


    let [formSubmitted, setFormSubmitted] = useState(false);

    const submitForm = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
    }

    const handleFormFieldChange = (formField) => {
        return (event) => {
            setLogin({ ...login, [formField]: event.target.value });
            if(formSubmitted) setFormSubmitted(false)
        }
    }
    return (
        <div className="container">
            <div className="col-6 offset-3">
                <div className="card border-primary">
                    <div className="card-header bg-primary text-light border-primary">
                        Login Form
                    </div>
                    <div className="card-body">
                        <form onSubmit={submitForm}>
                            <div className="mb-3">
                                <label>Username</label>
                                <input
                                    onChange={handleFormFieldChange("username")}
                                    value={login.username}
                                    type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input
                                    onChange={handleFormFieldChange("password")}
                                    value={login.password}
                                    type="text" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                        {/* TODO: How to move loginValidation to json and not bcrypt*/}
                        {formSubmitted ? login.username == 'admin' && login.password == 'admin' ? 'Welcome Admin' : 'Invalid Credentials' : null}
                        <p>username: admin, password: admin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}