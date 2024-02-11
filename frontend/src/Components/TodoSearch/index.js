import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import './TodoSearch.css';
import { TodoContext } from "../TodoContext";
function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    return (_jsx("input", { placeholder: "Type here to search to-dos...", className: "TodoSearch", value: searchValue, onChange: (event) => {
            setSearchValue(event.target.value);
        } }));
}
export { TodoSearch };
