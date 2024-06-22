import {Li} from "../components/list/Li.jsx";

export function Header(){
    return <div>
        <nav className="mb-2 h-10 bg-gradient-to-b from-blue-800 to-gray-300 shadow-lg shadow-gray-600">
            <ul className="flex h-full flex-row font-designer text-xs text-black ">
                <Li navTo="/" name="Home" />
                <Li navTo="/translator" name="Traducteur" />
                <Li navTo="/todo" name="TODO List" />
                <Li navTo="/contact" name="Contact" />
            </ul>
        </nav>
    </div>
    }
