import React from "react";
import "./Stander.css";
import Number from "../../shared/Number";
import Dates from "../../shared/dates";
function Stander(props) {
  return (
    <div className="app__stander">
      <div className="stander__header">
        <img src="Standard/logo.png" alt="" width={187} height={26.7} />
      </div>

      <div className="stander__box">
        <div className="stander__circle">
          <img src="/public/Standard/check.png" alt="" width={10} />
        </div>
        <span className="stander__text">
          Pronto! Seu pagamento foi realizado
        </span>
      </div>

      <div className="standar__content">
        <div className="standar__valor">
          <span className="valor__name">Valor</span>
          <span className="valor__amount"> R${Number.brazil(props.amount)}</span>
        </div>
        <div className="standar__para">
          <span className="valor__name">Para</span>
          <span className="standar__customer">Carlito Luis Braga</span>
        </div>
        <div className="standar__data">
          <span className="valor__name">Data e hora da transação </span>
          <span className="standar__date"> {Dates.fulldate()}</span>
        </div>
        <div className="standar__codigo">
          <span className="valor__name">Código de autenticação</span>
          <span className="standar__code">E51{Number.generateRandomString()}{Dates.generateRandomDateNumber()}{Number.generateRandom4Number()}{Number.generate4RandomNumber()}</span>
        </div>
        <div className="standar_moredetail">
          <div>
            <img
              src="Standard/info.png"
              alt="Info content"
              width={23}
              height={23}
            />
          </div>
          <div className="">
            <span className="detaills__more">
              Transação sujeita à cobrança de Tarifa.
            </span>
            <span className="detaills__more">
              Consulte os valores na Tabela de Serviços na
            </span>
            <span className="detaills__more">agências e no site:https://</span>
            <span className="detaills__more">
              www.santander.cpm.br/tarifas-e-pacotes-
            </span>
            <span className="detaills__more">pessoa-juridica</span>
          </div>
        </div>

        <img src="/Standard/bar.png" alt="" />

        <div className="standard__message">
          <span className="message__standard">
            Se està com alguma dúvida ê só ligar para a Central de
          </span>
          <span className="message__standard">
            Atendimento e felar o número do ID que estànnesse
          </span>
          <span className="message__standard">compravante</span>
        </div>

        <div className="message__bigtitle">
          <span className="title__big">Central de Atendimento Santander</span>
        </div>

        <div className="standard__address">
          <span>4004-2125 (Capitais e Regiões Metropolitanas)</span>
          <span>0800-726-2125 (Demais Localidades)</span>
          <span>SAC 0800-762-7777</span>
          <span>Ouvidoria 0800-726-0322</span>
        </div>
      </div>
    </div>
  );
}

export default Stander;
