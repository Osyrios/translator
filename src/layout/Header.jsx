import {Li} from "../components/list/Li.jsx";

export function Header(){
    return <div>
        <nav className="py-3 mb-2 bg-gradient-to-b from-green-400 to-gray-300 shadow-lg shadow-gray-600">
            <ul className="flex flex-row justify-evenly font-designer text-xs text-black ">
                <Li navTo="/" name="Home" />
                <Li navTo="/translator" name="Traducteur" />
                <Li navTo="/todo" name="TODO List" />
                <Li navTo="/contact" name="Contact" />
            </ul>
        </nav>
    </div>
    }
