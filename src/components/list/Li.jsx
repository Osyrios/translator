import {NavLink} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function Li({navTo, name}){
    return <li className="p-3 rounded-3xl hover:bg-gradient-to-b hover:from-green-400 hover:to-gray-300 hover:shadow-lg hover:shadow-gray-800">
        <NavLink to={navTo}>{name}</NavLink></li>
}