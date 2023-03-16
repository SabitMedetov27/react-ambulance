import React from "react";
import "./Home.scss";
import Main from "../main/Main";
import Info from "../info/Info";
import Service from "../service/Service";
import Slider from "../slider/Slider";
import Price from '../price/Price'
function Home() {
  return (
    <div>
      <div className="fon">
        <div className="container">
          <Main />
          <div className="section-info">
            <Info />
          </div>
        </div>
      </div>
      <div className="service">
        <Service />
      </div>
      <div className="slider">
        <Slider />
      </div>
      <div className="price">
          <Price/>
      </div>
      <div className="footer">
        <span>1224.kg © Все права защищены</span>
      </div>
    </div>
  );
}

export default Home;
