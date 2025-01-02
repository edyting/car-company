// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";

const Collaborators = () => {
  return (
    <div>
      <div className="collaborators_container">
        <div className="top">
          <p>we collaborate with 100+ brands & dealers</p>
        </div>
        <div className="bottom">
          <Swiper
            // install Swiper modules
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            // rewind={true}
            autoplay={{
              delay: 250,
              disableOnInteraction: false,
            }}
            className="collaborator-carousel"
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="logo">
              <img src="../../public/logoipsum-286.svg" alt="logo" />
            </SwiperSlide>
            <SwiperSlide className="logo">
              <img src="../../public/logoipsum-297.svg" alt="logo" />
            </SwiperSlide>
            <SwiperSlide className="logo">
              <img src="../../public/logoipsum-321.svg" alt="logo" />
            </SwiperSlide>
            <SwiperSlide className="logo">
              <img src="../../public/logoipsum-325.svg" alt="logo" />
            </SwiperSlide>
            <SwiperSlide className="logo">
              <img src="../../public/logoipsum-330.svg" alt="logo" />
            </SwiperSlide>
            <SwiperSlide className="logo">
              <img src="../../public/logoipsum-341.svg" alt="logo" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
