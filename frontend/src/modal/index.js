import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom';
import './modal.css';
function Modal({ children }) {
    const modalElement = document.querySelector('#modal');
    if (!modalElement) {
        throw new Error("No element with id 'modal' found");
    }
    return ReactDOM.createPortal(_jsx("div", Object.assign({ className: 'modalBackground' }, { children: children })), modalElement);
}
export { Modal };
