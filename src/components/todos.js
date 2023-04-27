import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { callAddTodoAPI, callDeleteTodoAPI, callGetTodosAPI, callUpdateTodoAPI } from "../actions/todosAction";

export function Todos() {

    let dispatch = useDispatch();
    let navigate = useNavigate();
    let loggedInUser = useSelector(state => state.userInfo.loggedInUser);
    let todosInfo = useSelector(state => state.todosInfo);
    let todos = todosInfo.todos.filter(todo => todo.username == loggedInUser.username);
    let pendingTodos = todos.filter(todo => todo.status == 'pending')
    let doneTodos = todos.filter(todo => todo.status == 'done')
    let errorMessage = todosInfo.errorMessage;
    let successMessage = todosInfo.successMessage;

    useEffect(() => {
        if (!loggedInUser.username) navigate('/login');
        dispatch(callGetTodosAPI);
    },[])


    let [newTodo, setNewTodo] = useState({ id: null, description: '', status: 'pending', username: loggedInUser.username })

    const handleAddTodo = (event) => {
        event.preventDefault();
        dispatch(callAddTodoAPI(todosInfo.todos,newTodo));
    }

    return (
        <div className="col-12 text-center mt-3">
            <form onSubmit={handleAddTodo}>
                <div className="mb-4">
                    <input type="text" value={newTodo.description} onChange={(event) => setNewTodo({...newTodo, description: event.target.value})} />
                    <button className="btn btn-primary">Add todo</button>
                </div>
            </form>

            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

            <h4>Pending todos</h4>
            {pendingTodos.map(todo =>
                <p>{todo.description} &nbsp;
                    <button className="btn btn-sm btn-warning" onClick={() => dispatch(callUpdateTodoAPI(todosInfo.todos,{...todo,status:'done'}))}>done</button>
                    <button className="btn btn-sm btn-secondary" onClick={() => navigate('/todosUpdate/' + todo.id)}>edit</button>
                    <button className="btn btn-sm btn-danger" onClick={() => dispatch(callDeleteTodoAPI(todosInfo.todos,todo))}>X</button>
                </p>
            )}
            <h4>Finished todos</h4>
            {doneTodos.map(todo =>
                <p>{todo.description} &nbsp;
                    <button className="btn btn-sm btn-danger" onClick={() => dispatch(callDeleteTodoAPI(todosInfo.todos,todo))}>X</button>
                </p>
            )}
        </div>
    )
}



