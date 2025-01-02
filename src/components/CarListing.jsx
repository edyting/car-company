import { IoLocationOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

const CarListing = () => {
  const cars = [
    {
      id: 1,
      location: "Chicago,United States",
      brand: "Toyota Yaris Heykers Manual",
      tag: "New Car",
      distance: "67000 KM",
      date: "2017",
      price: "$15,000", 
      src: "../../public/car2.png",
    },
    {
      id: 2,
      location: "Chicago,United States",
      brand: "Toyota Yaris Heykers Manual",
      tag: "New Car",
      distance: "67000 KM",
      date: "2017",
      price: "$15,000",
      src: "../../public/car4.png",
    },
    {
      id: 3,
      location: "Chicago,United States",
      brand: "Toyota Yaris Heykers Manual",
      tag: "New Car",
      distance: "67000 KM",
      date: "2017",
      price: "$15,000",
      src: "../../public/car5.png",
    },
    {
      id: 4,
      location: "Chicago,United States",
      brand: "Toyota Yaris Heykers Manual",
      tag: "New Car",
      distance: "67000 KM",
      date: "2017",
      price: "$15,000",
      src: "../../public/car6.png",
    },
    {
      id: 5,
      location: "Chicago,United States",
      brand: "Toyota Yaris Heykers Manual",
      tag: "New Car",
      distance: "67000 KM",
      date: "2017",
      price: "$15,000",
      src: "../../public/car2.png",
    },
    {
      id: 6,
      location: "Chicago,United States",
      brand: "Toyota Yaris Heykers Manual",
      tag: "New Car",
      distance: "67000 KM",
      date: "2017",
      price: "$15,000",
      src: "../../public/car4.png",
    },
  ];
  return (
    <div>
      <div className="car-listing-section">
        {/* top-section */}
        <div className="top">
          <p>Car Listing</p>
          <h2>Find New and USed Cars of Various Brands Only at Carsento</h2>
        </div>

        {/* cars-listing */}
        <div className="listing-container">
          {cars.map((car) => (
            <div className="grid-item" key={car.id}>
              <img src={car.src} alt={car.brand} />
              {/* location */}
              <div>
                <div className="location">
                  <IoLocationOutline />
                  <span>{car.location}</span>
                </div>
                {/* brand */}
                <div className="brand">
                  <h2>{car.brand}</h2>
                </div>
                {/* details */}
                <div className="details">
                  {/* tag */}
                  <div className="">
                    <IoCarSportOutline />
                    <span>{car.tag}</span>
                  </div>
                  {/* date */}
                  <div className="date">
                    <FaRegCalendar />
                    <span>{car.date}</span>
                  </div>
                  {/* distance */}
                  <div className="distance">
                    <LuAlarmClock />
                    <span>{car.distance}</span>
                  </div>
                </div>
                <hr className="line" />
              </div>
              {/* bottom */}
              <div className="bottom">
                {/* price */}
                <div className="price">
                  <span>{car.price}</span>
                </div>
                {/* btn */}
                <button>Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* carousel */}
      <div className="listing-carousel">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {cars.map((car) => (
            <SwiperSlide key={car.id} className="listing-carousel-container">
              <div className="grid-item">
                <img src={car.src} alt={car.brand} />
                {/* location */}
                <div>
                  <div className="location">
                    <IoLocationOutline />
                    <span>{car.location}</span>
                  </div>
                  {/* brand */}
                  <div className="brand">
                    <h2>{car.brand}</h2>
                  </div>
                  {/* details */}
                  <div className="details">
                    {/* tag */}
                    <div className="tag">
                      <IoCarSportOutline />
                      <span>{car.tag}</span>
                    </div>
                    {/* date */}
                    <div className="date">
                      <FaRegCalendar />
                      <span>{car.date}</span>
                    </div>
                    {/* distance */}
                    <div className="distance">
                      <LuAlarmClock />
                      <span>{car.distance}</span>
                    </div>
                  </div>
                  <hr className="line" />
                </div>
                {/* bottom */}
                <div className="bottom">
                  {/* price */}
                  <div className="price">
                    <span>{car.price}</span>
                  </div>
                  {/* btn */}
                  <button>Details</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarListing;
