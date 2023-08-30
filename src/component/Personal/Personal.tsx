import React from "react";
import "./Personal.css";
import Number from "../../shared/Number";
function Personal(props) {
  return (
    <div className="app_personal">
      <div className="personal__header">
        <img src="/personal/close.png" width={15} />
        <span className="personal__date">31 JUL 2023 -12:53:00</span>
        <div></div>
      </div>

      <div className="personal__content">
        <div className="content__circle">
          <span className="circle__text">PL</span>

          <div className="small__circle">
            <img src="/personal/down.png" alt=""  width={12} />
          </div>
        </div>

        <div className="personaL__subheader">
          <span className="personal__text">
            Personal Servicos Financeiros Ltda
          </span>
          <span className="personal__bank">STARK BANK S.A.</span>
          <span className="personal__amount">R$ {Number.brazil(props.amount)}</span>

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
            <span className="enviar__span">Enviar comprovante por email</span>
            <div className="enviar__">
              <span className="enviar__detail">
                Receba seu comprovante em formato pdf em
              </span>
              <img src="/personal/next.png" alt="nextImage"  width={8.5} className="nextImage"/>
            </div>
            <span className="enviar__detail">seu email</span>
          </div>
        </div>
        <img src="/personal/bar.png" alt="" />
        <div className="ver__first __second">
          <div>
            <img src="/personal/eyes.png" alt="" width={28} height={28} />
          </div>
          <div>
            <span className="enviar__span">Transferência recebida</span>
            <div className="enviar__">
              <span className="enviar__detail">Pix</span>
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
            <span className="enviar__span">Precisa fazer um reembolso?</span>
            <div className="enviar__">
              <span className="enviar__detail">
                Faça um reembolso e devolva o valor integral ou
              </span>
              <img src="/personal/next.png" alt="nextI"  width={8.5} className="nextI"/>

            </div>
            <div className="last__detial">
              <span className="enviar__detail">
                parcial para quem te pagou até o dia 05 SET
              </span>
              <span className="enviar__detail __dates">2023</span>
            </div>
          </div>
        </div>

        <img src="/personal/bar.png" alt="" />
      </div>
    </div>
  );
}

export default Personal;
