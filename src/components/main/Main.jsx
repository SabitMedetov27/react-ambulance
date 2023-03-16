import React from "react";
import "./Main.scss";

import { AiOutlineClockCircle } from "react-icons/ai";
function Main() {
  return (
    <div className="main">
      <div className="contact">
        <div className="clock">
          <span className="icon-clock">
            <AiOutlineClockCircle />
          </span>

          <span className="work">Работаем 24/7</span>
        </div>
        <div className="text-main">
          <h2>
            Служба скорой помощи <br /> в Бишкеке
          </h2>
        </div>
        <div className="phone-main">
          <p>Вызов бригады с одного звонка:</p>
          <div className="num">
            <span>+996 995 001 224</span>
            <span>+996 705 001 224</span>
            <span>+996 225 001 224</span>
          </div>
        </div>
      </div>
      <div className="main-img">
        <img className="img1" src="img/1.jpg" alt="img" />
        <img className="img2" src="img/2.jpg" alt="img" />
      </div>
      
    </div>
  );
}

export default Main;
