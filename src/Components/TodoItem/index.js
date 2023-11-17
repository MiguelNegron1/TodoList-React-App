import './TodoItem.css';
import {CompleteIcon} from '../TodoIcon/CompleteIcon'
import {DeleteIcon} from '../TodoIcon/DeleteIcon'

function TodoItem(props) {
    return (
        <li className='TodoItem'>
            {/* <span 
            className={`Icon Icon-check 
            ${props.completed && "Icon-check--active"}`} 
            onClick={props.onComplete}>v 
            </span> */}
            <CompleteIcon 
            onComplete={() => props.onComplete(props.id)}
            completed={props.completed}/>

            <p className={`TodoItem-p 
            ${props.completed && "TodoItem-p--complete"}`}>
            {props.text}</p>

            <DeleteIcon 
            onDelete={() => props.onDelete(props.id)}/>
            {/* <span 
            className='Icon Icon-delete' 
            onClick={props.onDelete}>x
            </span> */}
        </li>
    );
}

export { TodoItem };

