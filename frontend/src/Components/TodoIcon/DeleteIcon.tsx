import React from "react";
import { TodoIcon } from ".";

function DeleteIcon({onDelete}: {onDelete: () => void}) {
    return (
        <TodoIcon 
        type="delete"
        color="red"
        onClick={onDelete}
        />
    )
}

export {DeleteIcon}