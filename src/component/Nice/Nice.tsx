import React from "react";
import "./Nice.css";
function Nice(props) {
  return (
    <div className="app__nice">
      <div className="header__nice">
        <img src="/Nice/nice.png" alt="" width={15} className="nice__close" />
      </div>
      <div className="nice__image">
        <img src="/Nice/logo.png" alt="" width={141} />
      </div>
      <div className="nice__content">
        <span className="qrcode">Pix código QR realizado</span>
        <span className="amount">R$ 550,00</span>
        <span className="alves">Nadson Eduardo Alves De Oliveira </span>
        <span className="internetsa">PAGSEGURO INTERNET IP S.A</span>
      </div>
      <div className="nice__bottom">
        <div className="border__without">Ver Comprovante</div>
        <div className="fullbackground">Fazer outro Pix</div>
      </div>
      <div className="mobile__nice">
        <img src="/Nice/mobile.png" alt="" width={193} />
      </div>
    </div>
  );
}

export default Nice;
