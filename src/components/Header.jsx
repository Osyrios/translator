import {NavLink} from "react-router-dom";

export function Header(){
    return <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/translator">Traducteur</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </>
    }
