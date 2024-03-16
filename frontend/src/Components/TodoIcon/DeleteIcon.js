import { jsx as _jsx } from "react/jsx-runtime";
import { TodoIcon } from ".";
function DeleteIcon({ onDelete }) {
    return (_jsx(TodoIcon, { type: "delete", color: "red", onClick: onDelete }));
}
export { DeleteIcon };
