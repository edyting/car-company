import { easeOut } from "motion";
import { easeIn, motion, useAnimation, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
 
const HowToBuy = () => {

  const toBuyVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration:1
      }
    },
  };

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const animationControl = useAnimation();

  // multiple direction for children
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset:["start end","center"]
  })

  // ---children values  -- second [ this is for directions x,y ]
  const childOne = useTransform(
    scrollYProgress,
    [0, 1],
    ["50%", "0%"]
  );
  const childTwo = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
   const childThree = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

  useEffect(() => {
    if (isInView) {
      animationControl.start("visible");
    }
  },[isInView])

  return (
    <div>
      <motion.div
        variants={toBuyVariant}
        initial="hidden"
        animate={animationControl}
        transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
        className="to_buy"
      >
        {/* header */}
        <motion.div
          transition={{ delay: 0.5 }}
          style={{ translateX: childOne }}
          className="header"
        >
          <p>How to Buy</p>
        </motion.div>
        <motion.div className="flex-container">
          <motion.div style={{ translateX: childTwo }} className="left">
            <h2> buy your car online,have it delivered</h2>
          </motion.div>
          <motion.div style={{ translateX: childThree }} className="right">
            <span ref={containerRef}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              rem illo velit veritatis laudantium minima, et facere iste sint
              assumenda earum! Assumenda, quaerat cum doloribus ex hic non
              asperiores excepturi veniam sint praesentium.
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
      
    </div>
  );
}

export default HowToBuy
