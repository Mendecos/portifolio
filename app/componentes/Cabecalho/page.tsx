import "./cabecalho.css";

export default function Cabecalho() {
  return (
    <div className="cabecalho">
      <div className="cabecalho-esq">
        <h1 className="cabecalho-titulo">G.Mendes</h1>
      </div>

      <div className="cabecalho-dir">
        <a
          href="mailto:gabriel_mendessilva@hotmail.com"
          className="cabecalho-link"
        >
          Email: gabriel_mendessilva@hotmail.com
        </a>

        <a
          href="https://wa.me/5553991614061"
          target="_blank"
          rel="noopener noreferrer"
          className="cabecalho-link"
        >
          WhatsApp: (53) 99161-4061
        </a>
      </div>
    </div>
  );
}

