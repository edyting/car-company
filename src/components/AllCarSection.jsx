// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css/bundle";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { easeOut } from "motion";



const AllCarSection = () => {
  const screen = window.innerWidth;
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => { 
     if (screen < 500) {
       setIsMobile(true);
     }
  }, [screen]);
  // console.log(screen)

  const show = isMobile ? 1 : 3;
  const space = isMobile ? 5 : 40;

  const cars = [
    {
      id: 1,
      src: "../../public/car4.png",
      alt: "car",
    },
    {
      id: 2,
      src: "../../public/car5.png",
      alt: "car",
    },
    {
      id: 3,
      src: "../../public/car6.png",
      alt: "car",
    },
    {
      id: 4,
      src: "../../public/car5.png",
      alt: "car",
    },
    {
      id: 5,
      src: "../../public/car6.png",
      alt: "car",
    },
  ];
// animation
  const containerVariant = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const childrenVariant = {
    hidden: {
      opacity: 0,
      y: 74,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.05,
      ease: easeOut
    }
  };

  const refContainer = useRef(null);
  const isInView = useInView(refContainer, { once: true });
  const maincontrols = useAnimation();

  useEffect(() => {
    if (isInView) {
      maincontrols.start("visible");
    }
  },[isInView])
  
  return (
    <div>
      <motion.div
        variants={containerVariant}
        animate={maincontrols}
        initial="hidden"
        className="third"
        ref={refContainer}
      >
        <motion.div
          variants={childrenVariant}
          className="third_small"
        >
          <p>All Car</p>
        </motion.div>
        <motion.div
          variants={childrenVariant}
          className="third_large"
        >
          <h2>Leading Dealer in New and Used Car</h2>
        </motion.div>
        <motion.div
          variants={childrenVariant}
          className="third_paragraph"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            temporibus voluptatem aliquid dolores enim sed nostrum esse
            repudiandae quaerat numquam.
          </p>
        </motion.div>
        {/* carousel */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={space}
          slidesPerView={show}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          className="slide-card-container"
        >
          {cars.map((car) => (
            <div
              
              className="slide-card"
              key={car.id}
            >
              <SwiperSlide>
                <img src={car.src} className="slide-img" alt={car.alt} />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
        {/* carousel */}
      </motion.div>
    </div>
  );
};

export default AllCarSection;
