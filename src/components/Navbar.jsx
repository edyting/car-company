import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [isClicked,setIsClicked]= useState(false);

  const handleClicked = ()=>{
    setIsClicked((prev)=>!prev)
  }


  return (
    <div>
          {/* mobile-Menu */}
    {
      isClicked && (   
   <div >
    
              <div className="mobile-menu">
        <div className="mobile-menu_links_container">
        <div>
          <ul className=" ">
            <li> 
              <a className="active" href="#!">
                Home
              </a>
            </li>
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!" className="">
                <span>Pages</span>
                {/* drop-down-icon */}
                <span className="">
                  <FaAngleDown />
                </span>
              </a>
            </li>

            <li>
              <a href="#!">Pricing</a>
            </li>
            <li>
              <a href="#!">Blog</a>
            </li>
            <li>
              <a href="#!">Contact</a>
            </li>

            <div>
          <button className="nav_btn">Buy a Car</button>
        </div>
          </ul>


        </div>
        </div>
      </div>
   </div>
)
    }

      <div className="nav">

        {/* menu-icon */}
        <div className="humburger" onClick={handleClicked}>
          {isClicked?<IoClose className="hum"/>:<FaBars className="hum" />}
        </div>
        {/* links-first 3 */}
        <div>
          <ul className="nav_links ">
            <li> 
              <a className="active" href="#!">
                Home
              </a>
            </li>
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!" className="with_dropdown">
                <span>Pages</span>
                {/* drop-down-icon */}
                <span className="drop_down_icon">
                  <FaAngleDown />
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/* logo */}
        <div className="nav_logo">
          <h3>Carsento</h3>
        </div>
        {/* links-last 3 */}
        <div>
          <ul className="nav_links">
            <li>
              <a href="#!">Pricing</a>
            </li>
            <li>
              <a href="#!">Blog</a>
            </li>
            <li>
              <a href="#!">Contact</a>
            </li>
          </ul>
        </div>
        {/* buy a car button */}
        <div>
          <button className="nav_btn">Buy a Car</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
