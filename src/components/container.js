
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"
import { StopWatch } from "./stopWatch"
import { ViewDefects } from "./viewDefects"
import { AddDefect } from "./addDefect"
import { LoginTwo } from "./loginTwo"
import { Login } from "./login"

export function Container() {
    return (
        <div className="container border">

            <BrowserRouter>
                <nav className="bg-light text-center display-5">
                    <Link to="/loginTwo">LoginTwo</Link>
                    <Link to="/addDefect">Add Defects</Link>
                    <Link to="/viewDefects">View Defects</Link>
                    <Link to="/stopWatch">Stopwatch</Link>
                    <Link to="/login">Login</Link>
                </nav>
                <Routes>
                    <Route path={"/loginTwo"} element={<LoginTwo />} />
                    <Route path={"/addDefect"} element={<AddDefect />} />
                    <Route path={"/viewDefects"} element={<ViewDefects />} />
                    <Route path={"/stopWatch"} element={<StopWatch />} />
                    <Route path={"/login"} element={<Login />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}