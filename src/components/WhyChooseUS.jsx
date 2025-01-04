// icons
import { GrNotes } from "react-icons/gr";
import { IoIosChatboxes } from "react-icons/io";
import { GiWallet } from "react-icons/gi";
import { FaCar } from "react-icons/fa6";

//  animation with motion
import { motion } from "motion/react";

const WhyChooseUS = () => {

  

  const leftTextVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

    const rightGridVariant = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.25,
        },
      },
    };


  const leftChildrenVariant = {
    hidden: {
      opacity: 0,
      // y: 100,
      scale: 0.7,
      transition: { ease: [ "easeOut"] },
    },
    visible: {
      opacity: 1,
      // y: 0,
      scale: 1,
      transition: { ease: ["easeIn"] },
    },
  };

   const rightGridChildrenVariant = {
     hidden: {
       opacity: 0,
       transition: { ease: ["easeOut"] },
     },
     visible: {
       opacity: 1,
       transition: { ease: ["easeIn"] },
     },
   };



  return (
    <div>
      <div className="fifth">
        {/* left */}
        <div className="left">
          <motion.div
            variants={leftTextVariant}
            initial="hidden"
            animate="visible"
            className="text"
          >
            <motion.p variants={leftChildrenVariant}>Why Choose Us?</motion.p>
            <motion.h4 variants={leftChildrenVariant}>
              To drive integrity by being honest & transparent in every
              interataction
            </motion.h4>
            <motion.span variants={leftChildrenVariant}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              debitis alias praesentium dolor expedita perspiciatis sequi facere
              voluptate esse iusto totam, natus ab laboriosam dolores pariatur
              omnis veniam! Ratione, soluta.20
            </motion.span>
          </motion.div>
        </div>
        {/* right */}
        <div className="right">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={rightGridVariant}
            className="items-container"
            id="container"
          >
            {/* items */}
            <motion.div variants={rightGridChildrenVariant} className="item">
              {/* icon */}
              <div className="icon">
                <FaCar />
              </div>
              <p>Quality Cars Low Prices</p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                blanditiis. Eveniet expedita dolorum ut neque.
              </span>
            </motion.div>
            <motion.div variants={rightGridChildrenVariant} className="item">
              {/* icon */}
              <div className="icon">
                <GrNotes />
              </div>
              <p>Know before you go</p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                blanditiis. Eveniet expedita dolorum ut neque.
              </span>
            </motion.div>
            <motion.div variants={rightGridChildrenVariant} className="item">
              {/* icon */}
              <div className="icon">
                <IoIosChatboxes />
              </div>
              <p>A happy sales force</p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                blanditiis. Eveniet expedita dolorum ut neque.
              </span>
            </motion.div>
            <motion.div variants={rightGridChildrenVariant} className="item">
              {/* icon */}
              <div className="icon">
                <GiWallet />
              </div>
              <p>Turn you car into cash</p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                blanditiis. Eveniet expedita dolorum ut neque.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUS
