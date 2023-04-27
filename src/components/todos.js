import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { callAddTodoAPI, callDeleteTodoAPI, callGetTodosAPI, callUpdateTodoAPI } from "../actions/todosActions";

export function Todos(){

    let navigate = useNavigate();

    let dispatch=useDispatch();
    let loggedInUser = useSelector(state=>state.userInfo.loggedInUser);
    let todosInfo = useSelector(state=>state.todosInfo);
    let todos = todosInfo.todos.filter(todo => todo.username == loggedInUser.username);
    let pendingTodos = todos.filter(todo=> todo.status=='pending');
    let doneTodos = todos.filter(todo=> todo.status=='done');
    let errorMessage = todosInfo.errorMessage;
    let successMessage = todosInfo.successMessage;

    useEffect(()=>{
        if (!loggedInUser.username) navigate('/login');
        dispatch(callGetTodosAPI);
    },[]);

    let [newTodo,setNewTodo] = useState({id:null,description:'',status:'pending',username:loggedInUser.username});

    const handleAddTodo = (ev) => {
        ev.preventDefault();
        dispatch(callAddTodoAPI(todosInfo.todos,newTodo));
    }

    return (
        <div className="col-12 text-center mt-3">
            {/* add todo form */}
            <form onSubmit={handleAddTodo}>
                <div className="mb-4">
                    <input 
                        onChange={(ev)=> setNewTodo({...newTodo,description: ev.target.value}) }
                        type="text" value={newTodo.description} />
                    <button className="btn btn-primary">Add Todo</button>
                </div>
            </form>
            {/* list of todos of that user separated by pending/done
            should have links to "mark done" and "edit" and "delete" 
            on edit we should go to the UpdateTodo view */}

            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

            <h4>Pending Todos</h4>
            {pendingTodos.map(todo => <p>
                                        {todo.description}&nbsp;
                                        <button 
                                            onClick={()=>dispatch(callUpdateTodoAPI(todosInfo.todos,{...todo,status:'done'}))}
                                            className="btn btn-sm btn-warning">done</button>
                                        <button 
                                            onClick={()=>navigate('/updateTodo/'+todo.id)}
                                            className="btn btn-sm btn-secondary">edit</button>
                                        <button 
                                            onClick={()=>dispatch(callDeleteTodoAPI(todosInfo.todos,todo))}
                                            className="btn btn-sm btn-danger">X</button>
                                        </p>)}

            <h4>Done Todos</h4>
            {doneTodos.map(todo => <p>
                                        {todo.description}&nbsp;
                                        <button 
                                            onClick={()=>dispatch(callDeleteTodoAPI(todosInfo.todos,todo))}
                                            className="btn btn-sm btn-danger">X</button>
                                        </p>)}

        </div>
    )
}