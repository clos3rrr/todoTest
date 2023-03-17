export interface TodoState {
  todos: Todo[]
}

export enum TodoActionTypes {
  ADD_TODO = 'ADD_TODO',
  EDIT_TODO = 'EDIT_TODO',
  DELETE_TODO = 'DELETE_TODO',
}
interface addTodoAction {
  type: TodoActionTypes.ADD_TODO
  payload: Todo
}
interface editTodoAction {
  type: TodoActionTypes.EDIT_TODO
  payload: Todo
}
interface deleteTodoAction {
  type: TodoActionTypes.DELETE_TODO
  payload: symbol
}

export type TodoAction = addTodoAction | editTodoAction | deleteTodoAction
