import React from "react";
import "./Pblack.css";
function Pblack(props) {
  return (
    <div className="app__black">
      <div className="personal__header">
        <img src="/personal/closegrey.png" width={15} />
        <span className="personal__date __timedate">31 JUL 2023 -12:53:00</span>
        <div></div>
      </div>
      <div className="personal__content">
        <div className="content__circle __cirlcleback">
          <span className="circle__text __grey">PL</span>
          <div className="small__circle"></div>
        </div>
        <div className="personaL__subheader">
          <span className="personal__text __textgrey">
            Personal Servicos Financeiros Ltda
          </span>
          <span className="personal__bank">STARK BANK S.A.</span>
          <span className="personal__amount __grey">R$ 508,00</span>
          <div className="ver__comprovante __fill">
            <img src="/personal/homewhite.png" alt="" width={21} height={22} />
            <span className="text__comprovante __grey">Ver Comprovante</span>
          </div>
        </div>
      </div>

      <div className="ver__detaill">
        <div className="ver__first">
          <div>
            <img src="/personal/homewhite.png" alt="" width={22} height={25} />
          </div>
          <div>
            <span className="enviar__span __grey">
              Enviar comprovante por email
            </span>
            <div className="enviar__">
              <span className="enviar__detail __darkgrey __smallfontsize">
                Receba seu comprovante em formato pdf em
              </span>
              <img src="/personal/next.png" alt="nextImage"  width={8.5} className="nextImage"/>
            </div>
            <span className="enviar__detail __darkgrey">seu email</span>
          </div>
        </div>
        <img src="/personal/bb.png" alt="" />
        <div className="ver__first __second">
          <div>
            <img src="/personal/whiteeyes.png" alt="" width={28} height={28} />
          </div>
          <div>
            <span className="enviar__span __grey">Transferência recebida</span>
            <div className="enviar__">
              <span className="enviar__detail __darkgrey __smallfontsize">Pix</span>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <img src="/personal/bb.png" alt="" />

        <div className="ver__first __second">
          <div>
            <img src="/personal/backwhite.png" alt="" width={25} height={26} />
          </div>
          <div>
            <span className="enviar__span __grey">
              Precisa fazer um reembolso?
            </span>
            <div className="enviar__">
              <span className="enviar__detail __darkgrey __darkgrey __smallfontsize">
                Faça um reembolso e devolva o valor integral
              </span>
              <img src="/personal/next.png" alt="nextI"  width={8.5} className="nextI"/>

            </div>
            <div className="last__detial">
              <span className="enviar__detail __darkgrey ">
                ou parcial para quem te pagou até o dia 22
              </span>
              <span className="enviar__detail __dates __darkgrey">
                AGO 2023
              </span>
            </div>
          </div>
        </div>

        <img src="/personal/bb.png" alt="" />
      </div>
    </div>
  );
}

export default Pblack;
