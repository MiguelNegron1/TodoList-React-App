import './TodoSearch.css'
import { useContext } from 'react'; 
import { TodoContext, TodoContextType } from "../TodoContext";


function TodoSearch() {
  const context = useContext(TodoContext);
  const {  searchValue,
    setSearchValue
  } = useContext<TodoContextType>(TodoContext as React.Context<TodoContextType>);
  
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