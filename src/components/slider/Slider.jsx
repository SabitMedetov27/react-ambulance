import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.scss";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { data } from "../../arr";
import "swiper/scss";
import "swiper/scss/pagination";
function Slider() {
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#D41307",
      }}
      spaceBetween={30}
      pagination={{
        // el: ".swiper-pagination",
        clickable: true,
      }}
      modules={[Pagination]}
      speed={800}
      slidesPerView={1}
      className="mySwiper"
    >
      {data.map((item) => (
        <SwiperSlide >
          <div className="slider-blog">
            <div key={item.id} className="img-slider">
              <img src={item.img} alt="img" />
            </div>

            <div className="slider-title">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
          
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
