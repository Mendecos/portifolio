import "./principal.css";
import Image from "next/image";
export default function Principal() {
  return (
    <div className="principal-container">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
      ></link>

      <div className="principal-esq">
        <div>
          <h1>Ola, me chamo</h1>
          <h1>Gabriel Mendes</h1>
          <h2>Desenvolverdor</h2>
        </div>
        <div className="icones">
          <a href="https://www.linkedin.com/in/gabriel-m-s" target="_blank"><i className="bi bi-linkedin"></i></a>
          <a href="https://github.com/Mendecos" target="_blank"><i className="bi bi-github"></i></a>
          <a href="https://www.instagram.com/gabriel_mendessilva" target="_blank"><i className="bi bi-instagram"></i></a>
         
          
        </div>
      </div>
      <div className="principal-dir">
        <Image
          src="/Cabecalho/foto.png"
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
