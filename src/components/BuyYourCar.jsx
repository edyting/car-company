import { easeOut } from "motion";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

const BuyYourCar = () => {
  const SectionVariant = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.05,
      ease: easeOut,
    },
  };

  const refContainer = useRef(null);
  const isInView = useInView(refContainer, { once: true });
  const maincontrols = useAnimation();

  useEffect(() => {
    if (isInView) {
      maincontrols.start("visible");
    }
  }, [isInView]);
  
  return (
    <div>
      <motion.div className="buycar-container">
        <motion.div
          variants={SectionVariant}
          animate={maincontrols}
          initial="hidden"
          className="main"
        >
          {/* left */}
          <div className="left" ref={refContainer}>
            <h2>buy your car online today</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              enim vel. Libero, facere. Hic, eligendi obcaecati in vitae sunt
              quibusdam?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quod, enim vel. Libero, facere. Hic, eligendi obcaecati in vitae
              sunt quibusdam?
            </p>
          </div>
          {/* right */}
          <div className="right">
            <button>Buy a Car Now</button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default BuyYourCar
