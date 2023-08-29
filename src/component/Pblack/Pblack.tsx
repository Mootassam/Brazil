import React from "react";
import "./Pblack.css";
function Pblack(props) {
  return (
    <div className="app__black">
      <div className="personal__header">
        <img src="/personal/close.png" width={15} />
        <span className="personal__date">31 JUL 2023 -12:53:00</span>
        <div></div>
      </div>

      <div className="personal__content">
        <div className="content__circle">
          <span className="circle__text">PL</span>

          <div className="small__circle"></div>
        </div>

        <div className="personaL__subheader">
          <span className="personal__text">
            Personal Servicos Financeiros Ltda
          </span>
          <span className="personal__bank">STARK BANK S.A.</span>
          <span className="personal__amount">R$ 508,00</span>

          <div className="ver__comprovante">
            <img src="/personal/home.png" alt="" width={21} height={22} />
            <span className="text__comprovante">Ver Comprovante</span>
          </div>
        </div>
      </div>

      <div className="ver__detaill">
        <div className="ver__first">
          <div>
            <img src="/personal/home.png" alt="" width={22} height={25} />
          </div>
          <div>
            <span className="enviar__span __grey">
              Enviar comprovante por email
            </span>
            <div className="enviar__">
              <span className="enviar__detail __darkgrey">
                Receba seu comprovante em formato pdf em
              </span>
              <img src="" alt="" />
            </div>
            <span className="enviar__detail __darkgrey">seu email</span>
          </div>
        </div>
        <img src="/personal/bar.png" alt="" />
        <div className="ver__first __second">
          <div>
            <img src="/personal/eyes.png" alt="" width={28} height={28} />
          </div>
          <div>
            <span className="enviar__span __grey">Transferência recebida</span>
            <div className="enviar__">
              <span className="enviar__detail __darkgrey">Pix</span>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <img src="/personal/bar.png" alt="" />

        <div className="ver__first __second">
          <div>
            <img src="/personal/back.png" alt="" width={25} height={26} />
          </div>
          <div>
            <span className="enviar__span __grey">
              Precisa fazer um reembolso?
            </span>
            <div className="enviar__">
              <span className="enviar__detail __darkgrey __darkgrey">
                Faça um reembolso e devolva o valor integral
              </span>
              <img src="" alt="" />
            </div>
            <div className="last__detial">
              <span className="enviar__detail __darkgrey ">
                ou parcial para quem te pagou até o dia 22 
              </span>
              <span className="enviar__detail __dates __darkgrey">AGO 2023</span>
            </div>
          </div>
        </div>

        <img src="/personal/bar.png" alt="" />
      </div>
    </div>
  );
}

export default Pblack;
