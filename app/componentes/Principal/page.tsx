import "./principal.css";
import Image from "next/image";
export default function Principal() {
  return (
    <div className="principal-container">
      <div className="principal-esq">
        <div>
          <h1>Ola, me chamo</h1>
          <h1>Gabriel Mendes</h1>
          <h2>Desenvolverdor *************</h2>
        </div>
        <div className="icones">
          <div>
            00
          </div>
          <div>
            00
          </div>
          <div>
            00
          </div>
        </div>
      </div>
      <div className="principal-dir">
        <Image
          src="/Cabecalho/decos.png"
          alt="Logo"
          width={400}
          height={400}
          className="imagem"
        />
      </div>
      <h1></h1>
    </div>
  );
}
