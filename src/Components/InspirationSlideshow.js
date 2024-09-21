import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// InspirationSlideshow component
const InspirationSlideshow = () => {
  return (
    <>
      <div className="swiper-container">
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="2"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{ clickable: true }}
          // loop={true}
          // pagination={{ el: "swiper-pagination", clickable: true }}
          // navigation={{
          //   nextEl: ".slider-controler__next",
          //   prevEl: ".slider-controler__prev",
          //   clickable: true,
          // }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="./imgs/Categories/categorie-table.jpg"
              alt="inspiration 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./imgs/Categories/categorie-table.jpg"
              alt="inspiration 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./imgs/Categories/categorie-table.jpg"
              alt="inspiration 3"
            />
          </SwiperSlide>
          {/* <div className="slider-controler">
            <div className="slider-controler__prev">
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="slider-controler__next">
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="swiper-pagination"></div>
          </div> */}
        </Swiper>
      </div>
    </>
  );
};

export default InspirationSlideshow;
