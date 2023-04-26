import { useState } from "react"
import { Link, Routes, Route } from "react-router-dom"
import { LoginTwo } from "./loginTwo"
import { ViewDefects } from "./viewDefects"
import { AddDefect } from "./addDefect"
import { Logout } from "./logout"
import { StopWatch } from "./stopWatch"
import { ViewSingleDefect } from "./viewSingleDefect"

export function DefectsContainer() {

    let [loggedInUser, setLoggedInUser] = useState({ username: '', password: '', role: '' })

    function captureLoggedInUser(user) {
        setLoggedInUser({ ...user });
    }
    return (
        <div className="container border">
            <h2 className="text-center mb-4">Defect Tracker</h2>
            <div className="mb-2" style={{ minHeight: "40px" }}>
                {loggedInUser.username ?
                    <>
                        <p className="text-center">
                            Welcome {loggedInUser.username}
                            <Link to="/logout" onClick={()=> setLoggedInUser({username:'',password:'',role:''})}>Logout</Link>
                        </p>
                        <p className="text-center">
                            {loggedInUser.role === 'tester' ? <Link to="/addDefect">Add Defect</Link> : null} &nbsp;
                            <Link to="/viewDefects">View Defects</Link>

                        </p>
                    </> : null

                }
            </div>
            <Routes>
                <Route path='/' element={<LoginTwo onLoginSuccess={captureLoggedInUser} />} />
                <Route path='/loginTwo' element={<LoginTwo onLoginSuccess={captureLoggedInUser} />} />
                <Route path='/viewDefects' element={<ViewDefects />} />
                <Route path='/addDefect' element={<AddDefect />} />
                <Route path='/stopWatch' element={<StopWatch />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/viewDefects/:id' element={<ViewSingleDefect />} />
            </Routes>
        </div>
    )
}