import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom';
import './modal.css';
function Modal({ children }) {
    const modal = document.querySelector('#modal');
    if (!modal) {
        throw new Error('You need to have a div with id modal in your index.html');
    }
    return ReactDOM.createPortal(_jsx("div", Object.assign({ className: 'modalBackground' }, { children: children })), modal);
}
export { Modal };
