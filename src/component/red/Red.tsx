import React from "react";
import "./Red.css";
import Number from "../../shared/Number";
import Dates from "../../shared/dates";
function Red(props) {
  return (
    <div className="app__red">
      <div className="red__header">
        <div></div>
        <div className="detail__header"> Detalhe do Lançamento</div>
        <div></div>
      </div>
      <div className="red__subheader">
        <div className="subheader__top">
          <label htmlFor="" className="title__red">
            Pix recebido
          </label>
          <label htmlFor="" className="description__red">
            Cash pay meios de pagamen
          </label>
        </div>
        <div className="subheader__bottom">
          <label htmlFor="" className="title__reds">
            Valor
          </label>
          <label htmlFor="" className="amount__red">
            R${Number.brazil(props.amount)}
          </label>
        </div>
      </div>
      <div className="red__content">
        <div className="content__redtop">
          <span className="content__title">
            Saldo em conta após este lançamento
          </span>
          <span className="content__amount">lasR${Number.brazil(props.amount)}</span>
        </div>
        <div className="content__redbottom">
          <span className="content__title">Data</span>
          <span className="content__amount">{Dates.ddmmyyyy()}</span>
        </div>
      </div>
    </div>
  );
}

export default Red;
