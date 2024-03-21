import React from "react";
import footerStyles from "../css/footer.module.css";
import Contact from "./Contact";

const Footer = () => {
  return (
    <>
      <Contact />
      <footer>
        <div className={footerStyles.heading}>
          <h4>About Us</h4>
          <div>
            <p>We have a passion to craft presence with two decades of experience</p>
            <p>
              <span>
                <b>Email: </b>
                info@squadinternational.net
              </span>
              <span>
                <b>Call Us: </b>
                +1 (954) 417 7926
              </span>
            </p>
          </div>
          <h4>Gallery</h4>
          <h4>Careers</h4>
          <h4>Contact Us</h4>
        </div>
        <div className={footerStyles.about}>
          <h4>Contact Us</h4>
          <ul>
            <li><b>UK Office:</b></li>
            <li>The Garage, 114 Markhouse Road, E17 8BG, London.
              <p><b>Call Us:</b> +44 7411943425 / +44 7440 612496</p>
            </li>
            <li><b>US Office:</b></li>
            <li>428 Southwest 80th Avenue, North Lauderdale, Florida 33068
              <p><b>Call Us:</b> +1 9544177926 / +1 9073026503</p>
            </li>
            <li><b>Pakistan Office:</b></li>
            <li>Office #214, 2nd Floor, Kawish Crown Building, Shahrah-e-Faisal Rd, Karachi, Sindh 75350
              <p><b>Call Us:</b> +92 2134169351 / +92 3132972974</p>
            </li>
            <li><b>Japan Office:</b></li>
            <li>150-2 Komagatamachi, Maebashi, Gunma 379-2122, Japan
              <p><b>Call Us:</b> +81 70-1524-1308</p>
            </li>
          </ul>
          <p>For Any Queries, Call Us At, <b>+1 (954) 417 7926</b></p>
        </div>
        <div className={footerStyles.product}>
          <h4>Recent News</h4>
          <ul>
            <li><img src="https://www.squadtechsolution.com/images/Blog%2001.webp" alt="" /> <p>The Pros and Cons of Outsourcing IT Services</p></li>
            <li><img src="https://www.squadtechsolution.com/images/Blog%2002.webp" alt="" /><p>The Benefits of Virtualization in IT Environments</p></li>
            <li><img src="https://www.squadtechsolution.com/images/Blog%2003.webp" alt="" /><p>The Benefits and Risks of BYOD (Bring Your Own Device) Policies</p></li>
          </ul>
        </div>
        <div className={footerStyles.logo}>
          <img src="https://api.squadinternational.net/api/images/logo.webp?apikey=21b72d701586241ce2004e28d2276882" alt="" />
          <p>Copyright © Squad International Pvt Ltd. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
