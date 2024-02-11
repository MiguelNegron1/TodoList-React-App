import React, { useState } from 'react'
import './TodoForm.css'
import { TodoContext } from '../TodoContext'

function TodoForm() {
    const context = React.useContext(TodoContext);
    if (!context) {
        // handle the case where the context is null
        throw new Error('TodoForm must be used within a TodoProvider');
    }
    
    const {
        addTodo,
        setOpenModal,
    } = context
    const [newTodoValue, setnewTodoValue] = useState('')


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setnewTodoValue(e.target.value)
    }


    return(
        <form onSubmit={onSubmit}>
            <label>Write your new to-do</label>
            <textarea 
            placeholder="Enter text..."
            value={newTodoValue}
            onChange={onChange}
            ></textarea>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" type='button' onClick={onCancel}>Cancel</button>
                <button className="TodoForm-button TodoForm-button--add">Add</button>
            </div>
        </form>
    )
}
export {TodoForm}