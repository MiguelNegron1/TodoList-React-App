import  React, { useState }  from "react";
import { v4 as uuidv4 } from "uuid";
import  {useLocalStorage}  from "./useLocalStorage";

const TodoContext = React.createContext();


function TodoProvider({children}) {

    const {
        item : todos, 
        saveItem : saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('')
      const [openModal, setOpenModal] = React.useState(false)
    
      const completedTodos = todos.filter(todo => !!todo.completed).length
      const totalTodos = todos.length;
    const searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase()
      const textSearched = searchValue.toLowerCase()
        return todoText.includes(textSearched)
    })
    const addTodo = (text) => {
      const newTodos = [...todos];

      if (!text) return;

      newTodos.push({
        id: uuidv4(),
        text,
        completed: false,
      });
      saveTodos(newTodos)
    }

    const completeTodo = (id) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo)=> todo.id === id);
        if(todoIndex !== -1){
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      }
    }
  
    const deleteTodo = (id) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo)=>todo.id === id);
  
      if (todoIndex !== -1) {
        newTodos.splice(todoIndex,1)
        saveTodos(newTodos)
      }
    }
  
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export{TodoContext, TodoProvider};