import React, { useState } from "react";
import headerStyles from "../css/header.module.css";

const Header = () => {
  const [active, setActive] = useState(true);
  return (
    <header>
      <div class={headerStyles.logo} data-aos="fade-up" data-aos-duration="500">
        <a href="/">
          <img src='https://api.squadinternational.net/api/images/logo.webp?apikey=21b72d701586241ce2004e28d2276882' alt="" />
        </a>
      </div>
      <nav data-aos="fade-up" data-aos-duration="1000">
        <ul className={active && "display-none"}>
          <li>
            <a href="/">Home</a>
            <hr class={headerStyles.navUnderline} />
          </li>
          <li>
            <a href="/services">Services</a>
            <div className={headerStyles.submenu}>
              <ul>
                <li>Outbound Calls</li>
                <li>Customer Service</li>
                <li>Chat Support</li>
                <li>Email Outreach</li>
                <li>Email Support</li>
              </ul>
            </div>
            <hr class={headerStyles.navUnderline} />
          </li>
          <li>
            <a href="/industries">Industries</a>
            <hr class={headerStyles.navUnderline} />
          </li>
          <li>
            <a href="/blogs">Blog</a>
            <hr class={headerStyles.navUnderline} />
          </li>
          <li>
            <a href="/about-us">About Us</a>
            <hr class={headerStyles.navUnderline} />
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
            <hr class={headerStyles.navUnderline} />
          </li>
        </ul>
      </nav>
      <div
        class={headerStyles.action}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <button>
          <a href="/contact-us">Get in Touch</a>
        </button>
        <button onClick={() => setActive(!active)}>
          <i class="bx bx-menu"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
