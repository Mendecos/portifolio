import "./sobre.css";
import Image from "next/image";
export default function Sobre() {
  return (
    <div className="sobre-container">
      <div className="sobre-esq">
        <h1>Sobre</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in reiciendis similique obcaecati voluptatum
           impedit totam facilis est praesentium error ipsum corrupti nisi dolorum, adipisci culpa temporibus optio
            consequuntur recusandae.</h3>
      </div>
      <div className="sobre-dir">
        <h1>Formaçao</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in reiciendis similique obcaecati voluptatum
           impedit totam facilis est praesentium error ipsum corrupti nisi dolorum, adipisci culpa temporibus optio
            consequuntur recusandae.</h3>
      </div>
    </div>
  );
}
