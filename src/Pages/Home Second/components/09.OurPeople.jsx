import React from "react";
import collaborateStyles from "../../../assets/css/HomeTwo.module.css";

const OurPeople = () => {
    return (
        <section class={collaborateStyles.collaborate}>
            <div className={collaborateStyles.content}>
                <h2>Our People</h2>
                <p>Our people are seasoned experts in marketing, adept at both digital strategies and telemarketing techniques. Their combined skills drive impactful campaigns, maximizing reach and engagement across diverse channels.</p>
                <a href="/about-us#gallery"><button>Learn More</button></a>
            </div>
            <div className={collaborateStyles.image}>
                <img src="https://www.salsoft.net/assets/images/collaborate.jpg" alt="" />
            </div>
        </section>
    );
};

export default OurPeople;
