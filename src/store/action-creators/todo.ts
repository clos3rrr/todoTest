import { type TodoAction, TodoActionTypes } from '../../types/todo'

export const addTodo = (todo: Todo): TodoAction => {
  return { type: TodoActionTypes.ADD_TODO, payload: todo }
}

export const editTodo = (editedTodo: Todo): TodoAction => {
  return { type: TodoActionTypes.EDIT_TODO, payload: editedTodo }
}

export const deleteTodo = (id: symbol): TodoAction => {
  return { type: TodoActionTypes.DELETE_TODO, payload: id }
}
