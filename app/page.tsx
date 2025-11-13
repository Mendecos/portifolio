//import Image from "next/image";
import Cabecalho from "./componentes/Cabecalho/page";
import Formacao from "./componentes/Sobre/page";
import Principal from "./componentes/Principal/page";


export default function Home() {
  return (
    <div className="">
        <Cabecalho></Cabecalho>
        <Principal></Principal>
        <Formacao></Formacao>
      
    </div>
  );
}
