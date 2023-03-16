import React from "react";
import "./Info.scss";
function Info() {
  return (
    <div className="info">
      <div className="info1">
        <img src="img/icon1.png" alt="icon" />
        <h3>Оперативность</h3>
        <p>
          Платная скорая помощь существует благодаря моментальной реакции на
          вызов. Никаких отложек, когда каждая секунда на счету.
        </p>
      </div>
      <div className="info2">
        <img src="img/icon2.png" alt="icon" />
        <h3>Квалификация</h3>
        <p>
          Основное преимущество нашего сервиса – это ведущие практикующие медики
          с высокой квалификацией.
        </p>
      </div>
      <div className="info3">
        <img src="img/icon3.png" alt="icon" />
        <h3>Транспортировка</h3>
        <p>
          Наши водители – одни из лучших специалистов по экстренным перевозкам.
          В случае необходимости, мы поможем перевезти больного.
        </p>
      </div>
    </div>
  );
}

export default Info;
