// Criação cabeçalho página - Projeto Porto Seguro

import { createElement } from "react";

export default function Cabecalho(props) {
    return (

        <> 
            <header> 
                <h1> Projeto: Challenge Porto Seguro </h1>
                    <ul> 
                        {props.children.map((item, indice) => { 
                        createElement("li", { key: indice }, item); 
                        return item;        })} 
                    </ul>
            </header> 
        </>
    ); 
}