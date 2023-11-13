import React from 'react'
import {TodoList} from '../Components/TodoList'
import {TodoItem} from '../Components/TodoItem'
import {TodoSearch} from '../Components/TodoSearch'
import {TodoCounter} from '../Components/TodoCounter'
import {CreateTodoButton} from '../Components/CreateTodoButton'
import {Todosloading} from '../Components/Todosloading'
import {TodosError} from '../Components/TodosError'
import {EmptyTodos} from '../Components/EmptyTodos'
import { TodoContext } from '../Components/TodoContext'
import {Modal} from '../modal/index'
import {TodoForm}  from '../Components/TodoForm'
function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    return (
        <>
                            <TodoList>
                                {loading ? <Todosloading/> :
                                <>
                                    <TodoCounter/>
                                    <TodoSearch/>
                                </> 
                                }
                                {error && <TodosError/>}
                                {!loading && searchedTodos.length === 0 && <EmptyTodos/>}
                                {searchedTodos.map(todo => (
                                <TodoItem  
                                key={todo.text}  
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={()=> deleteTodo(todo.text)}
                                />  
                                ))}
                            </TodoList>
                <CreateTodoButton setOpenModal={setOpenModal}/>

                {openModal &&(                    
                    <Modal>
                            <TodoForm />
                    </Modal>
                )}
        </>
    );
}

export {AppUI}