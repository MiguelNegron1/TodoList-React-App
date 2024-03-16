import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoCounter } from '../Components/TodoCounter';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { Todosloading } from '../Components/Todosloading';
import { TodosError } from '../Components/TodosError';
import { EmptyTodos } from '../Components/EmptyTodos';
import { TodoContext } from '../Components/TodoContext';
import { Modal } from '../modal/index';
import { TodoForm } from '../Components/TodoForm';
function AppUI() {
    const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);
    return (_jsxs(_Fragment, { children: [_jsxs(TodoList, { children: [loading ? _jsx(Todosloading, {}) :
                        _jsxs(_Fragment, { children: [_jsx(TodoCounter, {}), _jsx(TodoSearch, {})] }), error && _jsx(TodosError, {}), !loading && searchedTodos.length === 0 && _jsx(EmptyTodos, {}), searchedTodos.map(todo => (_jsx(TodoItem, { text: todo.text, completed: todo.completed, onComplete: () => completeTodo(todo.id), onDelete: () => deleteTodo(todo.id), id: 0 }, todo.id)))] }), _jsx(CreateTodoButton, { setOpenModal: (open) => setOpenModal(false) }), openModal && (_jsx(Modal, { children: _jsx(TodoForm, {}) }))] }));
}
export { AppUI };
