export function userActions(type, data) {
  return {type, ...data};
}