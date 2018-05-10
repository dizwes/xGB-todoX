import { ADD_TODO, TOGGLE_TODO } from '../actions';

let nextId = 1;

const todoListReducer = (state = [], action) => {
  switch (action.type){
    case ADD_TODO:
      const newTodo = {
        id: nextId++,
        text: action.text,
        done: false
      }
      return [...state, newTodo]

      case TOGGLE_TODO:
      action.todoId
      return state.map(todo => {
        if(todo.id === action.todoId)
          return {
            ...todo,
            done: !todo.done
          };
          return todo;
      })
      action.text
      default:
        return state;
  }
}

export default todoListReducer;