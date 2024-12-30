
const Navbar = () => {
  return (
    <div>
      <div className="nav">
        {/* menu-icon */}
        <div className="humburger"></div>
        {/* links-first 3 */}
        <div>
          <ul className="nav_links">
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!">
                Pages
                {/* drop-down-icon */}
                <div className="drop_down_icon"></div>
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
        <div >
          <button className="nav_btn">Buy a Car</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar
