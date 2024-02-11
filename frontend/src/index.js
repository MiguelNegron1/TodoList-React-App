import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("No element with id 'root' found");
}
const root = ReactDOM.createRoot(rootElement);
root.render(_jsx(App, {}));
