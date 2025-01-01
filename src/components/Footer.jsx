import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_top">
          <div className="footer_item">
            <span>Buying & Selling</span>
            <p>Find a Car</p>
            <p>Find a Dealer</p>
            <p>Listing By City</p>
            <p>Sell Your Car</p>
          </div>

          <div className="footer_item">
            <span>Explore Our Brand</span>
            <p>Dealer Inspire</p>
            <p>Find a Dealer</p>
            <p>Grow With Carsento</p>
            <p>Dealer Login</p>
          </div>

          <div className="footer_item">
            <span>Our Network</span>
            <p>Service</p>
            <p>Insigne</p>
            <p>Hasseland</p>
            <p>Hovenvalley</p>
          </div>

          <div className="footer_item">
            <span>Get Mobile App</span>
            <div className="footer_item_icons">
              <div className="footer_item_icon">
                <BiLogoPlayStore />
                <p>Android</p>
              </div>
              <div className="footer_item_icon">
                <FaAppStoreIos /> <p>IOS</p>
              </div>
            </div>
            <span>Stay Connected with Us</span>
            <div className="subscribe">
              <input type="text" name="" placeholder="Enter Your Email" id="" />
              <div className="footer_item_btn">
                <button>Subscribe</button>
              </div>
            </div>
            <small>For Latest update Sign up here</small>
          </div>

          {/* <div className="footer_item"></div> */}
        </div>

        {/* middle */}
        <div className="footer_middle">
          <div className="footer_middle_logo">
            <span>Carsento</span>
          </div>
          <div className="footer_middle_links">
            <a href="#?">About Us</a>
            <div className="footer_middle_links_circle"></div>
            <a href="#?">Investor Relations</a>
            <div className="footer_middle_links_circle"></div>
            <a href="#?">Our Team</a>
            <div className="footer_middle_links_circle"></div>
            <a href="#?">Career with Us</a>
          </div>
          <div className="footer_middle_socials">
            <FaFacebook className="footer_middle_socials_icon" />
            <FaTwitter className="footer_middle_socials_icon" />
            <FaYoutube className="footer_middle_socials_icon" />
            <FaInstagram className="footer_middle_socials_icon" />
            <FaLinkedinIn className="footer_middle_socials_icon" />
          </div>
        </div>

        <div className="footer_end">
                  <div className="footer_end_left">
                      &copy; 2024-Envalab.com. All Right Reserved
          </div>
                  <div className="footer_end_right">
                      <p>Privacy Policy</p>
                      <p>Terms Of Services</p>
                      <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
