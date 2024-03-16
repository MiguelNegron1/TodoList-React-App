import React from "react";
import './TodoSearch.css'
import { TodoContext, TodoContextType } from "../TodoContext";


function TodoSearch() {

  const {  searchValue,
    setSearchValue
  } = React.useContext<TodoContextType>(TodoContext as React.Context<TodoContextType>);
  
  return (
    <input 
      placeholder="Type here to search to-dos..." 
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}></input>  
  )
}

export {TodoSearch};