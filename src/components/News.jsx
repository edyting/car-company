import { FaArrowRightLong } from "react-icons/fa6";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

const News = () => {
    const news = [
      {
        id: 1,
        heading: "mystery chevy compact suv spied, might slot below equinox",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus totam asperiores a soluta modi consequuntur harum voluptatum omnis repudiandae!",
        date: "puriwp . March 12,2022",
        src: "../../public/pexels-tinchflicks-29112761.jpg",
      },
      { 
        id: 2,
        heading:
          "2023 Audi E-Tron drifting through winter tuning and calibration",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus totam asperiores a soluta modi consequuntur harum voluptatum omnis repudiandae!",
        date: "puriwp . March 12,2022",
        src: "../../public/pexels-tinchflicks-29112761.jpg",
      },
      {
        id: 3,
        heading:
          "musk's plan for tesla-built batteries has an acceleration challenge",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus totam asperiores a soluta modi consequuntur harum voluptatum omnis repudiandae!",
        date: "puriwp . March 12,2022",
        src: "../../public/pexels-tinchflicks-29112761.jpg",
      },
    ];
  return (
    <div>
      <div className="news">
        <div className="top">
          <div className="text">
            <p>From Our Blog</p>
            <h2>News & Article</h2>
          </div>
          <div className="link">
            More <FaArrowRightLong />
          </div>
        </div>
        <div className="bottom">
          <Swiper
            className="bottom"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            {news.map((news) => (
              <SwiperSlide className="news_card" key={news.id}>
                <img src={news.src} alt={news.heading} />
                <div className="heading">
                  <h2>{news.heading}</h2>
                </div>
                <div className="text">{news.text}</div>
                <div className="date">
                  <p>{news.date}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default News;
