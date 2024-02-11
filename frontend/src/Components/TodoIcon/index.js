import { jsx as _jsx } from "react/jsx-runtime";
// import { ReactComponent as CheckSVG} from "./checkIcon.svg";
// import { ReactComponent  as DeleteSVG} from "./deleteIcon.svg";
import { BsCheck } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import "./TodoIcons.css";
const IconTypes = {
    'check': (color) => _jsx(BsCheck, { className: "Icon-svg", fill: color }),
    'delete': (color) => _jsx(TiDelete, { className: "Icon-svg", fill: color })
};
function TodoIcon({ type, color, onClick }) {
    return (_jsx("span", Object.assign({ className: `Icon-container  Icon-container-${type}`, onClick: onClick }, { children: IconTypes[type](color) })));
}
;
export { TodoIcon };
