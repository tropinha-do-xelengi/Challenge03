// Adição de link páginas Home Porto e Vistoria 

import { Link } from 'react-router-dom'; 

export default function Inicio() {
    return (

        <>
            <h3> Páginas Projeto </h3>
            <li> 
                <Link to ="/"> Início </Link>
            </li> 

            <li> 
                <Link to ="/homeporto"> Home Porto </Link>
            </li>

            <li> 
                <Link to="/homeporto/vistoria"> Vistoria </Link>
            </li>
        </>

    )
}