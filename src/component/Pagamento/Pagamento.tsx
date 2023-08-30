import React from "react";
import "./pagamento.css";
function Pagamento(props) {
  return (
    <div className="app__pagamento">
      <div className="pagamento__header">
        <div className="pagamento__circle">
          <img src="/Pagamento/logo.png" alt="" width={40} height={40} />
        </div>

        <span className="pagamento__amount">R$ 550,00</span>
        <span className="cash">Cash Pay Meios de Pagamento LTDA</span>

        <div className="pagamento__border">
          <span className="outras__text">Outras saídas </span>

          <div className="smallcircle__grey">
            <img src="Pagamento/pen.png" alt="" width={19} height={21} />
          </div>
        </div>

        <img src="/Pagamento/bar.png" alt="" />
      </div>

      <div className="sobre__detail">
        <h1 className="sbore__title">Sobre o pagamento</h1>
        <div className="detail__sobre">
          <div>
            <span className="detaill__1">Data de expiração</span>
            <span className="detaill__2">31/07/2023</span>
          </div>
          <div>
            <span className="detaill__1">Hora de expiração</span>
            <span className="detaill__2">14:40</span>
          </div>
          <div>
            <span className="detaill__1">Identificador</span>
            <span className="detaill__2">
              S42620230731147852369852114752164
            </span>
          </div>
        </div>
        <img src="/Pagamento/bar.png" alt="" />
      </div>

      <div className="sobre__detail">
        <h1 className="__third__title">Quem vai receber</h1>
        <div className="detail__sobre">
          <div>
            <span className="detaill__1">Nome</span>
            <span className="detaill__2">Cash Pay Meios de Pagamento LTDA</span>
          </div>
          <div>
            <span className="detaill__1">CPF/CNPJ</span>
            <span className="detaill__2">66.369.254/0696-69</span>
          </div>
          <div>
            <span className="detaill__1">Instituição</span>
            <span className="detaill__2">MK Digital</span>
          </div>
          <div>
            <span className="detaill__1">Endereço</span>
            <span className="detaill__2">PORTO ALEGRE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagamento;
