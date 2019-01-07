export const TODOLIST__ADD = "TODOLIST__ADD";

export const add = (text) => ({
  type: TODOLIST__ADD,
  payload: text
})