import { MdVerifiedUser } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { MdRecommend } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { easeOut } from "motion";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";


const RatingSection = () => {
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
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.05,
      ease: easeOut ,
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
      <motion.div
        variants={containerVariant}
        animate={maincontrols}
        initial="hidden"
        className="forth"
        ref={refContainer}
      >
        {/* verified */}
        <motion.div variants={childrenVariant} className="forth_verified">
          {/* top */}
          <div className="top">
            {/* logo */}
            <div className="logo" id="verified">
              <MdVerifiedUser />
            </div>
            {/* text */}
            <div className="text">
              <span>100+</span>
            </div>
          </div>
          {/* bottom */}
          <div className="bottom">
            <p>Verified Dealers</p>
          </div>
        </motion.div>
        {/* cars for sale */}
        <motion.div variants={childrenVariant} className="cars_for_sale">
          {/* top */}
          <div className="top">
            {/* logo */}
            <div className="logo">
              <FaCarAlt />
            </div>
            {/* text */}
            <div className="text">
              <span>90K</span>
            </div>
          </div>
          {/* bottom */}
          <div className="bottom">
            <p>Cars For Sale</p>
          </div>
        </motion.div>
        {/* dealers */}
        <motion.div variants={childrenVariant} className="dealers">
          {/* top */}
          <div className="top">
            {/* logo */}
            <div className="logo">
              <MdRecommend />
            </div>
            {/* text */}
            <div className="text">
              <span>2,500</span>
            </div>
          </div>
          {/* bottom */}
          <div className="bottom">
            <p>Dealers Reviews</p>
          </div>
        </motion.div>
        {/* active users */}
        <motion.div variants={childrenVariant} className="active_users">
          {/* top */}
          <div className="top">
            {/* logo */}
            <div className="logo">
              <FaUsers />
            </div>
            {/* text */}
            <div className="text">
              <span>150K</span>
            </div>
          </div>
          {/* bottom */}
          <div className="bottom">
            <p>Active Users/day</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RatingSection;
