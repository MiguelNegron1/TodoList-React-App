import { jsx as _jsx } from "react/jsx-runtime";
import './EmptyTodos.css';
function EmptyTodos() {
    return (_jsx("p", Object.assign({ id: "emptyText" }, { children: "Create your first to-do" })));
}
export { EmptyTodos };
