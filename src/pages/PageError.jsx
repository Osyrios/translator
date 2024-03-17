import {Header} from "../layout/Header.jsx";
import {Link} from "react-router-dom";

export function PageError(){


    return <div className='font-roboto'>
        <Header/>
        <p className="text-center text-lg text-red-600 font-bold mt-16">La page demandée n&apos;existe pas</p>
        <div className="flex flex-row justify-center pt-5 underline font-bold ">
          <Link to={'/'}>Retour à l&apos;acceuil</Link>
        </div>
    </div>
}