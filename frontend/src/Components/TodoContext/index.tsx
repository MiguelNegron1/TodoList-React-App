import { useState, useEffect, createContext   }  from "react";
import { v4 as uuidv4 } from "uuid";
// import  {useLocalStorage}  from "./useLocalStorage";


interface Todo {
  id: string;
  text: string;
  completed: boolean;
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

const TodoContext = createContext<TodoContextType | null>(null);
function TodoProvider({children} : {children: React.ReactNode}) {
    // const {
    //     item : todos, 
    //     saveItem : saveTodos,
    //     loading,
    //     error,
    //   } = useLocalStorage<Todo[]>('TODOS_V1', []);
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [searchValue, setSearchValue] = useState<string>("");
    const [openModal, setOpenModal] = useState<boolean>(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
    // New Logic
    //   const [searchValue, setSearchValue] = React.useState('')
    //   const [openModal, setOpenModal] = React.useState(false)
    
    //   const completedTodos = todos ? todos.filter(todo => !!todo.completed).length : 0
    //   const totalTodos = todos ?  todos.length : 0;
    // const searchedTodos = todos ? todos.filter((todo) => {
    //   const todoText = todo.text.toLowerCase()
    //   const textSearched = searchValue.toLowerCase()
    //     return todoText.includes(textSearched)
    })
    // There is ts problem here which solution I dont find, so I will ignore it for now
    // const addTodo = (text: string): void => {
    //   if (!saveTodos) {
    //     throw new Error('saveTodos is not defined');
    //   }
      
    //   const newTodos = [...(todos || [])];
      
    //   if (!text) return;

    //   newTodos.push({
    //     id: uuidv4(),
    //     text,
    //     completed: false,
    //   });
    //   saveTodos(newTodos)
    // }
    // useEffect(() => {
    //   const fetchTodos = async () => {
    //     try {
    //       const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`);
    //       if (!response.ok) throw new Error('Failed to fetch todos');
    //       const fetchedTodos = await response.json();
    //       setTodos(fetchedTodos);
    //     } catch (error) {
    //       setError(error as Error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };

    //   fetchTodos();
    // }, []);
    useEffect(() => {
      fetch('http://localhost:4000/todos')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }, []);

    const addTodo = async(text:string): Promise<void> => {
  if (!text) return;

  const newTodo = {
    text,
    completed: false,
  };

  try {
      const response = await fetch('/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });

      if (!response.ok) {
        throw new Error('Failed to create todo');
      }

      const addedTodo = await response.json();
      setTodos([...(todos || []), addedTodo]);
    } catch (error) {
    console.error('Error adding todo:', error);
  }
};

    // const completeTodo = (id: string) => {
    //   if (!todos) return;
    //   const newTodos = [...todos];
    //   const todoIndex = newTodos.findIndex((todo)=> todo.id === id);
    //     if(todoIndex !== -1){
    //     newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    //     saveTodos(newTodos);
    //   }
    // }
    const completeTodo = async (id: string) => {
      try {
        if (!todos) return;

        const todoToComplete = todos.find((todo) => todo.id === id);
        if (!todoToComplete) return;

        const updatedTodo = { ...todoToComplete, completed: !todoToComplete.completed };
        const response = await fetch(`/todos/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedTodo),
        });

        if (!response.ok) {
          throw new Error('Failed to update todo');
        }
    
        const newTodos = todos.map((todo) => (todo.id === id ? updatedTodo : todo));
        setTodos(newTodos);
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    };
    // const deleteTodo = (id: string) => {
    //   if (!todos) return;
    //   const newTodos = [...todos];
    //   const todoIndex = newTodos.findIndex((todo)=>todo.id === id);
  
    //   if (todoIndex !== -1) {
    //     newTodos.splice(todoIndex,1)
    //     saveTodos(newTodos)
    //   }
    // }
  
    const deleteTodo = async (id: string) => {
      try {
        const response = await fetch(`/todos/${id}`, {
          method: 'DELETE',
        });
    
        if (!response.ok) {
          throw new Error('Failed to delete todo');
        }
        if (!todos) return;

        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    };
    
    return(
        <TodoContext.Provider value={{
            loading,
            error: new Error('Error'),
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