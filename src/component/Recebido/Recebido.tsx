import React from "react";
import "./Recebido.css";
import Number from "../../shared/Number";
function Recebido(props) {
  return (
    <div className="app__recebido">
      <div className="recebido__header"></div>

      <div className="recebido__content">
        <img src="Recebido/Logo.png" alt="" width={72} height={74} />
        <h1 className="recebido__title">Pix recebido</h1>
        <span className="recebito__description">kendo Servicos Digitais e</span>
        <span className="recebito__description">
          Intermediacao de Negocios Ltda
        </span>
        <span className="recebito__description __last">
          31 JUL 2023 12:52:53
        </span>
        <img src="Recebido/bar.png" alt="" />
        <div className="recebido__amount">
          <span className="recebido__amounttitle">Valor recebido</span>
          <span className="amount__recebido">R$ {Number.brazil(props.amount)}</span>
        </div>
        <img src="Recebido/bar.png" alt="" />

        <div className="recebido__bottom">
          <div className="comprovante">
            <img src="/public/Recebido/green.png" alt="" width={27} />
            <span className="green__description"> Comprovante do Pix</span>
          </div>
          <div className="pagamento">
          <img src="/public/Recebido/back.png" alt="" width={29} />
            <span className="green__description">Devolver esse pagamento</span>
          </div>
        </div>
        <img src="Recebido/bar.png" alt="" />
      </div>
    </div>
  );
}

export default Recebido;
