import {NavLink} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function Li({navTo, name}){
    return <li className="flex w-1/4 h-full justify-center items-center hover:bg-gradient-to-b hover:from-green-400 hover:to-gray-300 hover:shadow-lg hover:shadow-gray-800">
        <NavLink to={navTo} className="flex w-full h-full items-center justify-center">{name}</NavLink></li>
}