

// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from "react";

export function Login() {

    let [login, setLogin] = useState({ username: "", password: "" })
    let onloginClick = () => {
        setLogin({
            username: "abc",
            password: "xyz"
        })
    }


    return (
        <div className="container">
            <div className="col-6 offset-3">
                <div className="card border-primary">
                    <div className="card-header bg-primary text-light border-primary">
                        Login Form
                    </div>
                    <div className="card-body">
                        <form onSubmit={(event) => { event.preventDefault() }}>
                            <div className="mb-3">
                                <label>Username</label>
                                <input
                                    onChange={(event) => setLogin({ ...login, username: event.target.value })}
                                    value={login.username}
                                    type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input
                                    onChange={(ev) => setLogin({ ...login, password: ev.target.value })}
                                    value={login.password}
                                    type="text" className="form-control" />3
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                            <br />
                            {JSON.stringify(login)}
                            <br />
                            <button onClick={onloginClick}>Change username and password</button>
                        </form>
                        {/* TODO: FIX LOGIN VERIFICATION HERE, BUT HOW TO ROUTE? */}
                        {login.username ==='admin' ? <p> === Admin Login {login.password} === </p> : <p> === Non-Admin Login ===</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}