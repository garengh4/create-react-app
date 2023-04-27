import axios from "axios";

export function todosAction(type,successMessage,errorMessage,todos){
    return {
        type,successMessage,errorMessage,todos
    }
}

export function callGetTodosAPI(dispatch){
    dispatch(todosAction('updateTodosMessages','','',null));
    axios.get('http://localhost:4000/todos')
        .then(response=> {
            let allTodos = response.data;
            dispatch(todosAction('updateTodos','','',allTodos));
        }).catch(err=> dispatch(todosAction('updateTodosMessages','','Could net fetch Todos from Backend',null)))
}

export const callAddTodoAPI = (allTodos,newTodo) => (dispatch) => {
    dispatch(todosAction('updateTodosMessages','','',null));
    axios.post('http://localhost:4000/todos',newTodo)
        .then(response=>{
            let addedTodo = response.data;
            dispatch(todosAction('updateTodos','Todo Added','',[...allTodos,addedTodo]));
        }).catch(err=> dispatch(todosAction('updateTodosMessages','','Could not ADD Todo; try later',null)))
}

export const callUpdateTodoAPI = (allTodos,todoToUpdate) => (dispatch) => {
    dispatch(todosAction('updateTodosMessages','','',null));
    axios.put('http://localhost:4000/todos/'+todoToUpdate.id,todoToUpdate)
        .then(response=>{
            let updatedTodo = response.data;
            let updatedTodosArr = allTodos.map(todo=> todo.id===updatedTodo.id ? updatedTodo : todo);
            dispatch(todosAction('updateTodos','Todo Updated','',updatedTodosArr));
        }).catch(err=> dispatch(todosAction('updateTodosMessages','','Could not Update Todo; try later',null)))
}

export const callDeleteTodoAPI = (allTodos,todoToDelete) => dispatch => {
    dispatch(todosAction('updateTodosMessages','','',null));
    axios.delete('http://localhost:4000/todos/'+todoToDelete.id)
        .then(response=>{
            let updatedTodosArr = allTodos.filter(todo=> todo.id != todoToDelete.id);
            dispatch(todosAction('updateTodos','Todo Deleted','',updatedTodosArr));
        }).catch(err=> dispatch(todosAction('updateTodosMessages','','Could not DElete Todo; try later',null)))
}