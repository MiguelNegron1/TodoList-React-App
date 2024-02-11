import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext(null);
function TodoProvider({ children }) {
    const { item: todos, saveItem: saveTodos, loading, error, } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const completedTodos = todos ? todos.filter(todo => !!todo.completed).length : 0;
    const totalTodos = todos ? todos.length : 0;
    const searchedTodos = todos ? todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const textSearched = searchValue.toLowerCase();
        return todoText.includes(textSearched);
    })
        :
    ;
    // There is ts problem here which solution I dont find, so I will ignore it for now
    // @ts-ignore
    const addTodo = (text) => {
        if (!todos)
            return;
        const newTodos = [...todos];
        if (!text)
            return;
        newTodos.push({
            id: uuidv4(),
            text,
            completed: false,
        });
        saveTodos(newTodos);
    };
    const completeTodo = (id) => {
        if (!todos)
            return;
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.id === id);
        if (todoIndex !== -1) {
            newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
            saveTodos(newTodos);
        }
    };
    const deleteTodo = (id) => {
        if (!todos)
            return;
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.id === id);
        if (todoIndex !== -1) {
            newTodos.splice(todoIndex, 1);
            saveTodos(newTodos);
        }
    };
    return (_jsx(TodoContext.Provider, Object.assign({ value: {
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
        } }, { children: children })));
}
export { TodoContext, TodoProvider };
