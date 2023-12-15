import React, { useState } from "react";
import logo from "../../assets/images/logo.webp";
import headerStyles from "../css/header.module.css";

const Header = () => {
  const [active, setActive] = useState(true);
  var setVariable = () => {
    if (window.innerWidth > 1001) {
      setActive(false);
    }
  };
  return (
    <header>
      <div class={headerStyles.logo} data-aos="fade-up" data-aos-duration="500">
        <img src={logo} alt="" />
      </div>
      <nav data-aos="fade-up" data-aos-duration="1000">
        <ul className={!active && "display-none"}>
          <li>
            <a href="/">Home</a>
            <hr class={headerStyles.navUnderline} />
          </li>
          <li>
            <a href="/services">Services</a>
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
        <button>Get in Touch</button>
        <button onClick={() => setActive(!active)}>
          <i class="bx bx-menu"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
