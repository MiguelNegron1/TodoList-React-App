import { jsx as _jsx } from "react/jsx-runtime";
import './CreateTodoButton.css';
function CreateTodoButton({ setOpenModal }) {
    return (_jsx("button", Object.assign({ className: 'CreateTodoButton', onClick: () => {
            setOpenModal((state) => !state);
        } }, { children: "+" })));
}
export { CreateTodoButton };
