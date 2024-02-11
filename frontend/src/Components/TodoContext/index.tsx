import  React, { useState }  from "react";
import { v4 as uuidv4 } from "uuid";
import  {useLocalStorage}  from "./useLocalStorage";


interface Todo {
  text: string;
  completed: boolean;
  id: string;
}

export interface TodoContextType {
  todos?: Todo[];
  saveTodos?: (todos: Todo[]) => void;
  loading: boolean;
  error: Error | null;
  searchValue: string;
  setSearchValue: (value: string) => void;
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  completedTodos: number;
  totalTodos: number;
  searchedTodos: Todo[];
  addTodo: (text: string) => void;
  completeTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoContext = React.createContext<TodoContextType | null>(null);
function TodoProvider({children} : {children: React.ReactNode}) {

    const {
        item : todos, 
        saveItem : saveTodos,
        loading,
        error,
      } = useLocalStorage<Todo[]>('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('')
      const [openModal, setOpenModal] = React.useState(false)
    
      const completedTodos = todos ? todos.filter(todo => !!todo.completed).length : 0
      const totalTodos = todos ?  todos.length : 0;
    const searchedTodos = todos ? todos.filter((todo) => {
      const todoText = todo.text.toLowerCase()
      const textSearched = searchValue.toLowerCase()
        return todoText.includes(textSearched)
    })
    // There is ts problem here which solution I dont find, so I will ignore it for now
    // @ts-ignore
    const addTodo = (text: string): void => {
      // if (!todos) return;
      // const newTodos = [...todos];

      const newTodos = [...(todos || [])];
      
      if (!text) return;

      newTodos.push({
        id: uuidv4(),
        text,
        completed: false,
      });
      saveTodos(newTodos)
    }

    const completeTodo = (id: string) => {
      if (!todos) return;
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo)=> todo.id === id);
        if(todoIndex !== -1){
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      }
    }
  
    const deleteTodo = (id: string) => {
      if (!todos) return;
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
            error = new Error('Error'),
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