import { createEvent, createStore } from 'effector'

export const addTodo = createEvent<Todo>()
export const editTodo = createEvent<Todo>()
export const deleteTodo = createEvent<symbol>()

export const $todo = createStore<Todo[]>([])

$todo
  .on(addTodo, (state: Todo[], data: Todo) => [...state, data])
  .on(editTodo, (state: Todo[], data: Todo) => state.map(todo => todo.id === data.id ? data : todo))
  .on(deleteTodo, (state: Todo[], data: symbol) => state.filter(todo => todo.id !== data))
