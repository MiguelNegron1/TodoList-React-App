// import { ReactComponent as CheckSVG} from "./checkIcon.svg";
// import { ReactComponent  as DeleteSVG} from "./deleteIcon.svg";
import { BsCheck } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";

import "./TodoIcons.css";



const IconTypes = {
    'check': (color) => <BsCheck className="Icon-svg" fill={color}/>,
    'delete': (color) => <TiDelete className="Icon-svg" fill={color}/>
}

function TodoIcon({type, color, onClick}) {
    return (
        <span className={`Icon-container  Icon-container-${type}`}
        onClick={onClick}>
            {IconTypes[type](color)}
        </span>
    )
};

export {TodoIcon};