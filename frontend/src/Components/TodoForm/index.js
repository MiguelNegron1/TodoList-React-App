import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';
function TodoForm() {
    const context = React.useContext(TodoContext);
    if (!context) {
        // handle the case where the context is null
        throw new Error('TodoForm must be used within a TodoProvider');
    }
    const { addTodo, setOpenModal, } = context;
    const [newTodoValue, setnewTodoValue] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onChange = (e) => {
        setnewTodoValue(e.target.value);
    };
    return (_jsxs("form", Object.assign({ onSubmit: onSubmit }, { children: [_jsx("label", { children: "Write your new to-do" }), _jsx("textarea", { placeholder: "Enter text...", value: newTodoValue, onChange: onChange }), _jsxs("div", Object.assign({ className: "TodoForm-buttonContainer" }, { children: [_jsx("button", Object.assign({ className: "TodoForm-button TodoForm-button--cancel", type: 'button', onClick: onCancel }, { children: "Cancel" })), _jsx("button", Object.assign({ className: "TodoForm-button TodoForm-button--add" }, { children: "Add" }))] }))] })));
}
export { TodoForm };
