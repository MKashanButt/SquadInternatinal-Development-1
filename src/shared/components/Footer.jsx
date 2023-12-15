import React from "react";
import footerStyles from "../css/footer.module.css";
import Contact from "./Contact";

const Footer = () => {
  return (
    <>
      <Contact />
      <footer data-aos="fade-up" data-aos-duration="1000">
        <div class={footerStyles.circles}>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
          <div class={footerStyles.circle}></div>
        </div>
        <div class={footerStyles.upperFooter}>
          <div class={footerStyles.company}>
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div class={footerStyles.industries}>
            <h3>Industries</h3>
            <ul>
              <li>Healthcare</li>
              <li>Travel</li>
              <li>Retail</li>
              <li>Telecom</li>
              <li>Financial Services</li>
              <li>Ecommerce</li>
              <li>Manufacturing</li>
              <li>Logistics</li>
            </ul>
          </div>
          <div class={footerStyles.services}>
            <h3>Services</h3>
            <ul>
              <li>Outbound Calls</li>
              <li>Customer Service</li>
              <li>Chat Support</li>
              <li>Email Outreach</li>
              <li>Email Support</li>
            </ul>
          </div>
        </div>
        <div class={footerStyles.lowerFooter}>
          <div class={footerStyles.left}>
            <h1>
              GAIN
              <br />
              <b>MARKET</b>
              <br />
              SUPERMACY
            </h1>
          </div>
          <div class={footerStyles.right}>
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              suscipit, necessitatibus animi minima pariatur non vitae sed
              molestiae, incidunt earum a ad! Possimus magnam soluta sit minus,
              tempore nostrum illum corporis accusantium.
            </p>
            <p>
              <i class="bx bxl-facebook-circle"></i>
              <i class="bx bxl-linkedin-square"></i>
              <i class="bx bxl-instagram-alt"></i>
            </p>
          </div>
        </div>
      </footer>
      <div class={footerStyles.copyright}>
        <p>Copyright © Squad International Pvt Ltd. All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
