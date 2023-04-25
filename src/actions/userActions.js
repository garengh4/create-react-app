export function userAction(type, data) {
  return {type, ...data};
}