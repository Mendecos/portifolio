import "./cabecalho.css";

export default function Cabecalho() {
  return (
    <div className="cabecalho">
      <div className="cabecalho-esq">
        <h1 className="cabecalho-titulo">G.Mendes</h1>
      </div>

      <div className="cabecalho-dir">
        <button>Sobre</button>
        <button>Formação</button>
        <button>Outros projetos</button>
      </div>
    </div>
  );
}
