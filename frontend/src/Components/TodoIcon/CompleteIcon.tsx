import React from "react";
import { TodoIcon } from ".";
interface CompleteIconProps {
    completed: boolean;
    onComplete: () => void; // assuming onComplete is a function that takes no arguments
}

const CompleteIcon: React.FC<CompleteIconProps> = ({completed, onComplete}) => {
    return (
        <TodoIcon
        type="check"
        color={completed ? 'green' : 'gray'}
        onClick={onComplete}
        />
    );
}

export {CompleteIcon}