// icons
import { GrNotes } from "react-icons/gr";
import { IoIosChatboxes } from "react-icons/io";
import { GiWallet } from "react-icons/gi";
import { FaCar } from "react-icons/fa6";


const WhyChooseUS = () => {
  return (
    <div>
      <div className="fifth">
        {/* left */}
        <div className="left">
          <div className="text">
            <p>Why Choose Us?</p>
            <h4>
              To drive integrity by being honest & transparent in every
              interataction
            </h4>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              debitis alias praesentium dolor expedita perspiciatis sequi facere
              voluptate esse iusto totam, natus ab laboriosam dolores pariatur
              omnis veniam! Ratione, soluta.20
            </span>
          </div>
        </div>
        {/* right */}
        <div className="right">
          <div className="items-container" id="container">
            {/* items */}
            <div className="item1">
              {/* icon */}
              <div className="icon">
                <FaCar />
              </div>
              <p>Quality Cars Low Prices</p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                blanditiis. Eveniet expedita dolorum ut neque.
              </span>
            </div>
            <div className="item2">
              {/* icon */}
              <div className="icon">
                <GrNotes />
              </div>
              <p>Know before you go</p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                blanditiis. Eveniet expedita dolorum ut neque.
              </span>
            </div>
            <div className="item3">
              {/* icon */}
              <div className="icon">
                <IoIosChatboxes />
              </div>
              <p>A happy sales force</p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                blanditiis. Eveniet expedita dolorum ut neque.
              </span>
            </div>
            <div className="item4">
              {/* icon */}
              <div className="icon">
                <GiWallet />
              </div>
              <p>Turn you car into cash</p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                blanditiis. Eveniet expedita dolorum ut neque.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUS
