import {NavLink} from "react-router-dom";

export function Li({navTo, name}){
    return <li><NavLink to={navTo}>{name}</NavLink></li>
}