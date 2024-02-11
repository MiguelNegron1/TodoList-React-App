import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './TodoItem.css';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
function TodoItem(props) {
    return (_jsxs("li", Object.assign({ className: 'TodoItem' }, { children: [_jsx(CompleteIcon, { onComplete: () => props.onComplete(props.id), completed: props.completed }), _jsx("p", Object.assign({ className: `TodoItem-p 
            ${props.completed && "TodoItem-p--complete"}` }, { children: props.text })), _jsx(DeleteIcon, { onDelete: () => props.onDelete(props.id) })] })));
}
export { TodoItem };
