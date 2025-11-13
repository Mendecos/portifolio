import "./cabecalho.css";

export default function Cabecalho() {
  return (
    <div className="cabecalho">
      <div className="cabecalho-esq">
        <p className="titulo">G.Mendes</p>
      </div>

      <div className="cabecalho-dir">
        <button>Sobre</button>
        <button>Formação</button>
        <button>Outros projetos</button>
      </div>
    </div>
  );
}
