import axios from "axios";

export function todosAction(type, successMessage, errorMessage, todos){
    return {
        type,successMessage,errorMessage,todos
    }
}

export function callGetTodosAPI(dispatch){
    dispatch(todosAction('updateToDosMessages','','',null)); // goes to reducers
    axios.get('http://localhost:4000/todos')
        .then(response=>{
            let allTodos = response.data;
            dispatch(todosAction('updateTodos','','',allTodos));
        }).catch(err => dispatch(todosAction('updateToDosMessages','','Could not GET todos. Make sure to start backend or check src/actions/todosAction.js',null)));
}

export const callAddTodoAPI = (allTodos, newTodo) => (dispatch)=> {
    dispatch(todosAction('updateTodosMessages','','',null));
    axios.post('http://localhost:4000/todos', newTodo)
        .then(response => {
            let addedTodo = response.data;
            dispatch(todosAction('updateTodos','Todo Added','',[...allTodos, addedTodo]));
        }).catch(err => dispatch(todosAction('updateToDosMessages','','Could not POST new todo. Make sure to start backend or check src/actions/todosAction.js',null)));
}
export const callUpdateTodoAPI = (allTodos, todoToUpdate) => (dispatch) => {
    dispatch(todosAction('updateTodosMessage','','',null));
    axios.put('http://localhost:4000/todos/'+todoToUpdate.id, todoToUpdate)
        .then(response => {
            let updatedTodo = response.data;
            let updatedTodosArr = allTodos.map(todo => todo.id === updatedTodo.id ? updatedTodo: todo);
            dispatch(todosAction('updateTodos','Todo updated','',updatedTodosArr));
        }).catch(err => dispatch(todosAction('updateToDosMessages','','Could not PUT old todo. Make sure to start backend or check src/actions/todosAction.js',null)));
}

export const callDeleteTodoAPI = (allTodos, todoDelete) => (dispatch) => {
    dispatch(todosAction('updateTodosMessage','','',null));
    axios.delete('http://localhost:4000/todos/'+todoDelete.id)
    .then(response => {
        let updatedTodosArr = allTodos .filter(todo => todo.id != todoDelete.id);
        dispatch(todosAction('updateTodos','Todo delete','',updatedTodosArr));
    }).catch(err => dispatch(todosAction('updateToDosMessages','','Could not Delete todo. Make sure to start backend or check src/actions/todosAction.js',null)));
}