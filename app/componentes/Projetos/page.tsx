import "./projetos.css";
import Image from "next/image";

export default function Projetos() {
  return (
    <div className="projetos-container">
      <h1 className="titulo">Meus Projetos</h1>
      <div className="conteudo">
        <div className="projeto-esq">
          <h2 className="subtitulo">IndieTora livraria Online</h2>

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
            Indietora é a plataforma online desenvolvida para o projeto
            integrador em Next.js para funcionar como uma livraria voltada a
            escritores independentes, permitindo que publiquem suas obras com
            menos burocracia do que em editoras ou livrarias tradicionais.
            <p className="projeto-link">
              Documentação:{" "}
              <a
                target="_blank"
                href="https://gitlab.com/senac-projetos-de-desenvolvimento/2024-rodrigo-e-gabriel-mendes/gitlab-profile"
              >
                <i className="bi bi-gitlab"> </i>Gitlab
              </a>{" "}
            </p>
            <p className="projeto-link">
              Codigo:{" "}
              <a target="_blank" href="https://github.com/Mendecos/Indietora">
                <i className="bi bi-github"> </i>Github
              </a>
            </p>
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
            O Organo é um sistema de cadastro para organizar equipes, contendo
            formularios para inserir informações que servirão para criar o card
            da equipe. Contruido no curso de React: desenvolvendo com JavaScript
            da plataforma alura
          </p>
          <p className="projeto-link">
            Codigo:{" "}
            <a target="_blank" href="https://github.com/Mendecos/organo">
              <i className="bi bi-github"> </i>Github
            </a>
          </p>
        </div>
      </div>

      <div className="conteudo">
        <div className="projeto-esq">
          <h2 className="subtitulo">Parede da Minha Sala</h2>
          <div className="card-img">
            <Image
              src="/Cabecalho/booksotre_capa.png"
              alt="Projeto"
              width={400}
              height={250}
            />
          </div>
        </div>
        <div className="projeto-dir">
          <p>
            A plataforma Parede da Minha Sala foi desenvolvida com o objetivo de
            criar um espaço online para publicação das artes de minha Mulher e
            outras de minha autoria. O projeto foi construído utilizando
            Next.js, React e TypeScript, e conta com um banco de dados MySQL
            para armazenar as informações das artes. A aplicação é hospedada na
            Vercel, garantindo uma experiência rápida e confiável para os
            usuários. O código-fonte do projeto está disponível no GitHub,
            permitindo que outros possam explorar e contribuir para o
            desenvolvimento contínuo da plataforma.
          </p>
          <div className="links-projeto">
            <p className="projeto-link">
              Codigo:{" "}
              <a
                target="_blank"
                href="https://github.com/Mendecos/Parede-da-minha-sala"
              >
                <i className="bi bi-github"> </i>Github
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
