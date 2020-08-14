export interface ITodosActions {
  type:   "EDIT_TODO" | "DELETE_TODO" | "ADD_TODO"  | "UPDATE_TODO";
  payload: {
    id?: string;
    completed?: boolean;
    text?: string;
  };
}

export interface ITodosContext {
  state: ITodosState;
  dispatch: React.Dispatch<ITodosActions>;
}

export interface ITodosState {
  todos: Array<ITodos>;
  
}

export interface ITodos {
  id?: string;
  text?: string;
  completed?: boolean;
}







