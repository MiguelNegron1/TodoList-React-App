import './TodoItem.css';
import {CompleteIcon} from '../TodoIcon/CompleteIcon'
import {DeleteIcon} from '../TodoIcon/DeleteIcon'

interface TodoItemProps {
    text: string;
    completed: boolean;
    onComplete: (id: number) => void;
    onDelete: (id: number) => void;
    id: number;
}
function TodoItem(props: TodoItemProps) {
    return (
        <li className='TodoItem'>
            <CompleteIcon 
            onComplete={() => props.onComplete(props.id)}
            completed={props.completed}/>

            <p className={`TodoItem-p 
            ${props.completed && "TodoItem-p--complete"}`}>
            {props.text}</p>

            <DeleteIcon 
            onDelete={() => props.onDelete(props.id)}/>
        </li>
    );
}

export { TodoItem };

