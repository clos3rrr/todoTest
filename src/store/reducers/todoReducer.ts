import {TodoAction, TodoActionTypes, TodoState} from '../../types/todo';

const initialState: TodoState = {
  todos: [],
};

export const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return {...state, todos: [...state.todos, action.payload]};
    case TodoActionTypes.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        }),
      };
    case TodoActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => {
          if (todo.id === action.payload) {
            return false;
          }
          return true;
        }),
      };
    default:
      return state;
  }
};
