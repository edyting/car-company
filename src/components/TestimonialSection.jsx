import { FaQuoteLeft } from "react-icons/fa";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

const TestimonialSection = () => {
  const persons = [
    {
      id: 1,
      name: "John Doe",
      title: "car racing",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia rem sunt fuga numquam similique.",
      src: "../../public/person1.jpg",
    },
    { 
      id: 2,
      name: "John Doe",
      title: "content creator",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia rem sunt fuga numquam similique.",
      src: "../../public/person2.jpg",
    },
    {
      id: 3,
      name: "John Doe",
      title: "business owner",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia rem sunt fuga numquam similique.",
      src: "../../public/person3.jpg",
    },
  ];
  return (
    <div>
      <div className="testimonial">
        <div className="testimonial_card_container">
          <div className="circle">
            <FaQuoteLeft />
          </div>
          <div className="left">
            <p>Testimonials</p>
            <h2>What Our Customers Are Saying</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur culpa sequi atque officia dolore! Molestias nulla
              voluptatum vero officia. Nihil vero optio alias sunt quae sequi
              reiciendis officiis qui harum.
            </span>
          </div>
          <div className="right">
            <div className="right_absolute">
              {persons.map((person) => (
                <div className="card" key={person.id}>
                  <div className="img">
                    <img src={person.src} alt={person.name} />
                  </div>
                  <div className="about">
                    <p>{person.about}</p>
                  </div>
                  <div className="text">
                    <span>{person.name}</span>
                  </div>
                  <div className="title">
                    <span>{person.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* carousel */}
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            className="testimonial-carousel"
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
          >
            <div className="">
              {persons.map((person) => (
                <SwiperSlide
                  className="testimonial-carousel-card"
                  key={person.id}
                >
                  <div className="img">
                    <img src={person.src} alt={person.name} />
                  </div>
                  <div className="text-side">
                    <div className="about">
                      <p>"{person.about}"</p>
                    </div>
                    <div className="text">
                      <span>{person.name}</span>
                    </div>
                    <div className="title">
                      <span>{person.title}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
