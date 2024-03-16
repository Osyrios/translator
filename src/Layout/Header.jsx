import {Li} from "../components/list/Li.jsx";

export function Header(){
    return <div>
        <nav className="">
            <ul className="flex flex-row">
                <Li navTo="/" name="Home" />
                <Li navTo="/translator" name="Traducteur" />
                <Li navTo="/contact" name="Contact" />
            </ul>
            <p className="text-center">NAVIGATION</p>
        </nav>
    </div>
    }
