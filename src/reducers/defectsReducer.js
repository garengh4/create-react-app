export function defectsReducer(state={defects:[], successMessage:'', errorMessage:''}, action){
  switch (action.type) {
    case 'updateDefects': return {defects: action.updatedDefects, 
      successMessage: action.successMessage, errorMessage: action.errorMessage};
    case 'updateDefectsMessages': return {...state,
      errorMessage: action.errorMessage, successMessage: action.successMessage};
    default: return {...state};
  }
}