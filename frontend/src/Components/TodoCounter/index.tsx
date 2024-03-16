import React from 'react';
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";
import { TodoContextType } from '../TodoContext/index';


function TodoCounter() {
  const {
    completedTodos,
    totalTodos,

  } = React.useContext<TodoContextType>(TodoContext as React.Context<TodoContextType>)
  return (
    <h1 className='TodoCounter'>
      You have completed <span>{completedTodos} </span>  
      of <span>{totalTodos}</span> to-dos</h1>
  )
}

export {TodoCounter};