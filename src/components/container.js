import {useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import { Logout } from './logout';
import { LoginThree } from './loginThree';

import { useDispatch, useSelector } from 'react-redux';
import { userAction } from '../actions/userActions';
import { Todos } from './todos';
import { UpdateTodo } from './updateTodo';

export function Container() {

    let loggedInUser = useSelector(state=>state.userInfo.loggedInUser);
    let dispatch = useDispatch();

    const loginElement = <LoginThree />;


    return (
        <div className="container border">
            <h2 className="text-center mb-4">Todos</h2>
            {/* <!-- Depending on whether user is logged in or not, links show or not --> */}
            <div className="mb-2" style={  {minHeight: "40px"}  }>
                {loggedInUser.username ?
                    <>
                        <p className="text-center">
                            Welcome {loggedInUser.username} &nbsp;
                            <Link to='/todos'>View Todos</Link> &nbsp;
                            <Link to="/logout" onClick={()=>dispatch(userAction('logout',{}))}>Logout</Link>
                        </p>
                    </> : null
                }
            </div>

            <Routes>
                {/* try not to put any other elements between Routes and Route */}
                <Route path='/' element={loginElement} />
                <Route path='/login' element={loginElement} />
                <Route path='/todos' element={<Todos />} />
                <Route path='/updateTodo/:id' element={<UpdateTodo />} />
                {/* <Route path='/todos' element={<ViewDefectsTwo />} /> */}
                <Route path='/logout' element={<Logout />} />
                {/* <Route  /> */}
            </Routes>

        </div>
    )
}