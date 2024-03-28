import './TodoCounter.css';
import { TodoContext } from "../TodoContext";
import { TodoContextType } from '../TodoContext/index';
import { useContext } from 'react';


function TodoCounter() {
  const context = useContext(TodoContext);
  const {
    completedTodos,
    totalTodos,

  } = useContext<TodoContextType>(TodoContext as React.Context<TodoContextType>)
  return (
    <h1 className='TodoCounter'>
      You have completed <span>{completedTodos} </span>  
      of <span>{totalTodos}</span> to-dos</h1>
  )
}

export {TodoCounter};