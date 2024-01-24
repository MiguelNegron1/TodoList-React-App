import './TodoItem.css';
import {CompleteIcon} from '../TodoIcon/CompleteIcon'
import {DeleteIcon} from '../TodoIcon/DeleteIcon'

function TodoItem(props) {
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

