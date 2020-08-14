import React , { createContext , useReducer } from 'react'
import todosReducer from "./AppReducer";
import { ITodosContext } from "../Types/types";
const todos = [{ id : "1" ,  text : "laher asif"}]
  

  

interface Iprops {
    children?:React.ReactChild
}

export const  Context = createContext({} as ITodosContext)

export  function  Provider(props: Iprops){

    const [state, dispatch] = useReducer(todosReducer, { todos } );

   const value = { state , dispatch }
return <Context.Provider value={ value }>{props.children}</Context.Provider>
}


