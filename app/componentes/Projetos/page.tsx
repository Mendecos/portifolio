import "./projetos.css";
import Image from "next/image";

export default function Projetos() {
  return (
    <div className="projetos-container">
      <h1 className="titulo">Outros Projetos</h1>
      <div className="conteudo">
        <div className="projeto-esq">
          <h2 className="subtitulo">
            IndieTora livraria Online
          </h2>

          <div className="card-img">
            <Image
              src="/Cabecalho/logoescrito.png"
              alt="Projeto"
              width={400}
              height={250}
            />
          </div>
        </div>
        <div className="projeto-dir">
          <p>
            Indietora é a plataforma online desenvolvida para o projeto integrador em Next.js para funcionar como
            uma livraria voltada a escritores independentes, permitindo que
            publiquem suas obras com menos burocracia do que em editoras ou
            livrarias tradicionais.
          <p className="projeto-link">Documentação: <a target="_blank" href="https://gitlab.com/senac-projetos-de-desenvolvimento/2024-rodrigo-e-gabriel-mendes/gitlab-profile"><i className="bi bi-gitlab"> </i>Gitlab</a> </p>
          <p className="projeto-link">Codigo: <a target="_blank" href="https://github.com/Mendecos/Indietora"><i className="bi bi-github"> </i>Github</a></p>
          </p>
        </div>
      </div>
      <div className="conteudo">
        <div className="projeto-esq">
          <h2 className="subtitulo">Organo</h2>
          <div className="card-img">
            <Image
              src="/Cabecalho/banner.png"
              alt="Projeto"
              width={400}
              height={250}
            />
          </div>
        </div>
        <div className="projeto-dir">
          <p>
            O Organo é um sistema de cadastro para organizar equipes, contendo formularios para inserir informações que servirão para criar o card da equipe. Contruido no curso de React: desenvolvendo com JavaScript
            da plataforma alura
          </p>
          <p className="projeto-link">Codigo: <a target="_blank" href="https://github.com/Mendecos/organo"><i className="bi bi-github"> </i>Github</a></p>
        </div>
      </div>
      <div className="conteudo">
        <div className="projeto-esq">
          <h2 className="subtitulo">Nome do Projeto</h2>

          <div className="card-img">
            <Image
              src="/imagens/seu-projeto.png"
              alt="Projeto"
              width={400}
              height={250}
            />
          </div>
        </div>
        <div className="projeto-dir">
          <p>
            Aqui você descreve o projeto. Pode explicar o objetivo, tecnologias
            utilizadas, desafios enfrentados e o resultado final. Esse texto
            fica alinhado à direita e ocupa mais espaço visual.
          </p>
        </div>
      </div>
    </div>
  );
}
