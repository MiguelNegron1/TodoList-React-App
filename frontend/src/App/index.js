import { jsx as _jsx } from "react/jsx-runtime";
import { AppUI } from "./AppUI";
import { TodoProvider } from '../Components/TodoContext';
function App() {
    return (_jsx(TodoProvider, { children: _jsx(AppUI, {}) }));
}
export default App;
