import {Header} from "../Layout/Header.jsx";

export function PageError(){
    return <div>
        <Header/>
        <p className="text-center text-lg text-red-600 font-bold mt-16">La page demandée n&apos;existe pas</p>
    </div>
}