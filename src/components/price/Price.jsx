import React from "react";
import "./Price.scss";
function Price() {
  return (
    <div className="price-cont">
      <div className="container">
        <div className="price-blog">
          <div className="total-price">
            <h3>Вызвать платную скорую помощь</h3>
            <p>
              Если больному необходима срочная медицинская помощь, немедленная
              доставка и госпитализация в стационар в сопровождении медицинского
              персонала, значит Вам понадобится частная скорая медицинская
              помощь. В отличии от государственной, частная скорая помощь может
              помочь Вам в транспортировке в профильные лечебные учреждения по
              Вашему выбору, а также транспортировке больного из стационара в
              диагностические центры и домой.
            </p>
            <h4>Вызов и осмотр врача 1200 сом</h4>
          </div>
          <div className="name-phone">
            <p>
              Оставьте свой контактный номер, и мы перезвоним Вам в течение 5
              минут
            </p>
            <input type="text" placeholder="Имя"/>
            <input type="number" placeholder="Телефон" />
            <span>Политика конфиденциальности</span>
            <button>Вызвать скорую<img src="img/iconcar.png" alt="icon" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
