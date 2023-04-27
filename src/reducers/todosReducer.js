export function todosReducer(state={todos:[],errorMessage:'',successMessage:''},action){
    switch (action.type){
        case 'updateTodos': return {todos:action.todos,errorMessage:action.errorMessage,successMessage:action.successMessage};
        case 'updateTodosMessages': return {...state,errorMessage:action.errorMessage,successMessage:action.successMessage};
        default: return {...state};
    }
}