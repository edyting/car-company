import { MdVerifiedUser } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { MdRecommend } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";


const RatingSection = () => {
  return (
    <div> 
      <div className="forth">
        {/* verified */}
        <div className="forth_verified">
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
        </div>
        {/* cars for sale */}
        <div className="cars_for_sale">
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
        </div>
        {/* dealers */}
        <div className="dealers">
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
        </div>
        {/* active users */}
        <div className="active_users">
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
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
