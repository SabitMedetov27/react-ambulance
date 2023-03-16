import React from "react";
import "./Service.scss";
function Service() {
  return (
    <div className="container">
      <div className="service-info">
        <h3>Наши услуги</h3>
        <div className="service-cont">
          <div className="service-blog">
            <img src="img/ser1.jpg" alt="img" />
            <h4>РЕАНИМАЦИОННАЯ БРИГАДА</h4>
            <p>
              Реанимационная бригада укомплектована современными инструментами,
              а транспорт технически оснащён необходимым оборудованием для самых
              критических ситуаций.
            </p>
          </div>
          <div className="service-blog">
            <img src="img/ser2.jpg" alt="img" />
            <h4>ПЕДИАТРИЧЕСКАЯ БРИГАДА</h4>
            <p>
              Детская анатомия и жизнедеятельность организма не всегда работают
              так, как у взрослых людей. Поэтому в составе педиатрической
              бригады присутствуют высококлассные педиатры с огромной практикой.
            </p>
          </div>
          <div className="service-blog">
            <img src="img/ser3.jpg" alt="img" />
            <h4>НЕВРОЛОГИЧЕСКАЯ БРИГАДА</h4>
            <p>
              В состав неврологической бригады входят опытные неврологи,
              психотерапевты и невропатологи для срочного оказания помощи при
              коматозном состоянии, неврологической патологии или психического
              расстройства.
            </p>
          </div>
          <div className="service-blog">
            <img src="img/ser4.jpg" alt="img" />
            <h4>КАРДИОЛОГИЧЕСКАЯ БРИГАДА</h4>
            <p>
              Кардиологическая бригада оказывает помощь людям с нарушением
              работы сердца. Медицинское оснащение бригады включает весь
              необходимый спектр лекарственных препаратов и расходных
              материалов.
            </p>
          </div>
          <div className="service-blog">
            <img src="img/ser5.jpg" alt="img" />
            <h4>ТРАНСПОРТИРОВКА БОЛЬНЫХ</h4>
            <p>
              Транспортировочная бригада оказывает медицинскую транспортировку
              больного на всей территории Кыргызстана и Казахстана.
            </p>
          </div>
          <div className="service-blog">
            <img src="img/ser6.jpg" alt="img" />
            <h4>МЕДИЦИНСКОЕ СОПРОВОЖДЕНИЕ</h4>
            <p>
              Мы оказываем медицинское сопровождение культурных, спортивных и
              других иных массовых мероприятий.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;