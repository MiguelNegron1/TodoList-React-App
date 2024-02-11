import { jsx as _jsx } from "react/jsx-runtime";
import { TodoIcon } from ".";
const CompleteIcon = ({ completed, onComplete }) => {
    return (_jsx(TodoIcon, { type: "check", color: completed ? 'green' : 'gray', onClick: onComplete }));
};
export { CompleteIcon };
