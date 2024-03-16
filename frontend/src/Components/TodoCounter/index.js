import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";
function TodoCounter() {
    const { completedTodos, totalTodos, } = React.useContext(TodoContext);
    return (_jsxs("h1", Object.assign({ className: 'TodoCounter' }, { children: ["You have completed ", _jsxs("span", { children: [completedTodos, " "] }), "of ", _jsx("span", { children: totalTodos }), " to-dos"] })));
}
export { TodoCounter };
