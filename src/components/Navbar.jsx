import { FaBars } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div>
      <div className="nav">
        {/* menu-icon */}
        <div className="humburger">
          <FaBars />
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
