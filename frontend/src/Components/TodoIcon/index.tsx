// import { ReactComponent as CheckSVG} from "./checkIcon.svg";
// import { ReactComponent  as DeleteSVG} from "./deleteIcon.svg";
import { BsCheck } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";

import "./TodoIcons.css";



const IconTypes = {
    'check': (color: string) => <BsCheck className="Icon-svg" fill={color}/>,
    'delete': (color: string) => <TiDelete className="Icon-svg" fill={color}/>
}

function TodoIcon({type, color, onClick}: {type: string, color: string, onClick: () => void}) {
    return (
        <span className={`Icon-container  Icon-container-${type}`}
        onClick={onClick}>
            {IconTypes[type as keyof typeof IconTypes](color)}
        </span>
    )
};

export {TodoIcon};