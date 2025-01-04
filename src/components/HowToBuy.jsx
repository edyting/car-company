import { easeOut } from "motion";
import { easeIn, motion } from "motion/react";
 
const HowToBuy = () => {

  const toBuyVariant = {
    hidden: {
      opacity: 0,
      y:100,
    },
    visible: {
      opacity: 1,
      y:0,
    }
  }

  return (
    <div>
      <motion.div
        variants={toBuyVariant}
        initial="hidden"
        animate="visible"
        transition={{duration:0.5,ease:easeOut ,delay:0.2 }}
        className="to_buy">
        {/* header */}
        <div className="header"> 
          <p>How to Buy</p> 
        </div>
        <div className="flex-container">
          <div className="left">
            <h2> buy your car online,have it delivered</h2>
          </div>
          <div className="right">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci rem illo velit veritatis laudantium minima, et facere iste sint assumenda earum! Assumenda, quaerat cum doloribus ex hic non asperiores excepturi veniam sint praesentium. 
            </span>
          </div>
        </div>
      </motion.div>
    </div> 
  );
}

export default HowToBuy
