import React, { useState } from 'react'
import './TodoForm.css'
import { TodoContext } from '../TodoContext'

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)
    const [newTodoValue, setnewTodoValue] = useState('')


    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (e) => {
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