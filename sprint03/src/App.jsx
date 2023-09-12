import Rodape from "./components/Rodape";
import Conteudo from "./components/Conteudo";
import { Links } from 'react-router-dom'; 

export default function App() {
  return (

    <>
      <Conteudo/> 
        <Links/>
      <Rodape/> 
    </>

  ); 
}