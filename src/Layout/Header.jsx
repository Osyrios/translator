import {Li} from "../components/list/Li.jsx";

export function Header(){
    return <div>
        <nav className="py-5 mb-2 bg-fuchsia-600">
            <ul className="font-happySchool text-xs text-white flex flex-row justify-evenly ">
                <Li navTo="/" name="Home" />
                <Li navTo="/translator" name="Traducteur" />
                <Li navTo="/todo" name="TODO List" />
                <Li navTo="/contact" name="Contact" />
            </ul>
        </nav>
    </div>
    }
