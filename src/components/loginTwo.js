import { useEffect, useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs"
import { useNavigate } from "react-router-dom";

export function LoginTwo({ onLoginSuccess }) {

    console.log("===============================")
    console.log(onLoginSuccess)
    console.log("===============================")

    let navigate = useNavigate();

    let [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then(response => setUsers(response.data))
            .catch(error => { })
    }, [])
    
    let [login, setLogin] = useState({ username: "", password: "" });
    let [formSubmitted, setFormSubmitted] = useState(false);
    let [foundUser, setFoundUser] = useState(null);


    const submitForm = (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        let user = users.find(u => u.username == login.username);
        if (user) {
            {/* TODO: How to move loginValidation to json and not bcrypt*/ }
            if (bcrypt.compareSync(login.password, user.password)) {
                setFoundUser(user);
                onLoginSuccess(user);
                // navigate to another component
                // run onLoginSuccess function and pass data to parent container
                navigate('/viewDefects')
            }

        }
    }

    const handleFormFieldChange = (formField) => {
        return (event) => {
            setLogin({ ...login, [formField]: event.target.value });
            if (formSubmitted) setFormSubmitted(false)
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
                        {formSubmitted ? foundUser ? 'Welcome ' + login.username : 'Invalid Credentials' : null}
                        <p>username: developer,tester123 | password: developer123,tester123</p>
                    </div>
                </div>
            </div>
        </div>
    )
}