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
import { TodoContextType } from "../Components/TodoContext/index";
function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext<TodoContextType>(TodoContext as React.Context<TodoContextType>);
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
                                        key={todo.id}
                                        text={todo.text}
                                        completed={todo.completed}
                                        onComplete={() => completeTodo(todo.id)}
                                        onDelete={() => deleteTodo(todo.id)} id={0}                                />  
                                ))}
                            </TodoList>
                <CreateTodoButton setOpenModal={(open: (state: boolean) => boolean) => setOpenModal(false)}/>

                {openModal &&(                    
                    <Modal>
                            <TodoForm />
                    </Modal>
                )}
        </>
    );
}

export {AppUI}