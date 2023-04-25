export function defectsActions(type, successMessage, errorMessage, defects){
  return type === 'updateDefects' ? 
    {type, successMessage, errorMessage, updateDefects: defects} :
    {type, successMessage, errorMessage};
}