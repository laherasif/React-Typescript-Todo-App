import * as uuid from "uuid";
import { ITodosActions, ITodosState } from "../Types/types";
export default function todosReducer(
  state: ITodosState,
  action: ITodosActions
): ITodosState {
  switch (action.type) {
    
    case "DELETE_TODO": {
      // debugger;
      const deletedTodo = state.todos.filter(item => {
        return item.id !== action.payload.id 
        
      });
      return {
        ...state,
        todos: deletedTodo
      };
    }
    case "ADD_TODO": {
      const newTodo = {
        id: uuid.v4(),
        text: action.payload.text,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    }

    case "EDIT_TODO":{
      const EditTodo = state.todos.filter(item => {
        return item.id === action.payload.id 
        
      });
      return {
        ...state,
        todos: EditTodo
      };
    }

    case "UPDATE_TODO":{
      debugger
      
      {
        var updateState = state.todos;
        let id = action.payload.id;
        let newList = updateState.filter((item) => item.id !== id);
        newList.unshift(action.payload);

        return ({
            ...state,
            todos: newList,

        });
    }
  }
    default: {
      return state;
    }
  }
}
