export function defectsActions(type, successMessage, errorMessage, defects){
  return type === 'updateDefects' ? 
    {type, successMessage, errorMessage, updateDefects: defects} :
    {type, successMessage, errorMessage};
}

export function callAddDefectAPI(newDefect, currentDefects) {
  return (dispatch) => { // thunk allows to run any code
    dispatch(defectsActions('updateDefectsMessages', '', '', null));
    axios.post("http://localhost:4000/defects", newDefect)
    .then(response => {
      let addedDefect = response.data;
      dispatch(defectsActions('updatetDefects', 'Add Success', '', [...currentDefects, addedDefect]));
    }
    ).catch(err => dispatch(defectsActions('updateDefectsMessages', '', 'Could not add defect; try later', null)));
  }
}

export function callViewDefectsAPI(dispatch) {
  axios.get("http://localhostt:4000/defects")
  .then(response => {
    let allDefects = response.data;
    dispatch(defectsActions('updateDefects', '', '', allDefects));
  }).catch(err => dispatch(defectsActions('updateDefectsMessages', '', 'Could not fetch defects; try later', null)));
}