import { jsx as _jsx } from "react/jsx-runtime";
import './TodoList.css';
function TodoList({ children }) {
    return (_jsx("ul", Object.assign({ className: "TodoList" }, { children: children })));
}
export { TodoList };
