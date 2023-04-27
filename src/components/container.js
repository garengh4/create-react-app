import { useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { Logout } from './logout'
import { useDispatch, useSelector } from "react-redux";
import { userAction } from '../actions/userAction'
import { Login } from "./login";
import { Todos } from "./todos";
import { TodosUpdate } from "./todosUpdate";

export function Container() {

    let loggedInUser = useSelector(state => state.userInfo.loggedInUser);
    let dispatch = useDispatch();

    const loginElement = <Login />

    return (
        <div className="container border">
            <h2 className="text-center mb-4">Todos</h2>
            <div className="mb-2" style={{ minHeight: "40px" }}>
                {loggedInUser.username ?
                    <>
                        <p className="text-center">
                            Welcome {loggedInUser.username} 
                            &nnbsp;
                            <Link to="/todos" >View todos</Link>
                            &nnbsp;
                            <Link to="/logout" onClick={() => dispatch(userAction('logout', {}))}>Logout</Link>
                        </p>
                    </> : null
                }
            </div>
            <Routes>
                <Route path="/" element={loginElement} />
                <Route path="/login" element={loginElement} />
                <Route path="/todos" element={<Todos />} />
                <Route path="/todosUpdate/:id" element={<TodosUpdate />} />
                <Route path="/logout" element={<Logout />} /> 
            </Routes>
        </div>
    )
}