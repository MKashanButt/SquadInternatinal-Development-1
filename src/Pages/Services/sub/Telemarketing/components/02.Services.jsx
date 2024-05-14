import React from "react";
import ServiceStyle from "../../../../../assets/css/sub/Telemarketing.module.css";

const Services = () => {
    return (
        <section class={ServiceStyle.services}>
            <div class={ServiceStyle.left}>
                <img
                    src='https://api.squadinternational.net/api/images/service-bg.webp?apikey=21b72d701586241ce2004e28d2276882'
                    alt=""
                    data-aos="fade-right"
                    data-aos-duration="1000"
                />
                <img
                    src='https://api.squadinternational.net/api/images/service-front.webp?apikey=21b72d701586241ce2004e28d2276882'
                    alt=""
                    data-aos="fade-right"
                    data-aos-duration="1000"
                />
                <div class="circle"></div>
            </div>
            <div class={ServiceStyle.right}>
                <h4 data-aos="fade-left" data-aos-duration="1000">
                    Services
                </h4>
                <h1 data-aos="fade-left" data-aos-duration="1000" class="uppercase">
                    Maximize your business potential
                </h1>
                <p data-aos="fade-left" data-aos-duration="1000">
                    We combine information and skills to provide superior B2B Business
                    Process Outsourcing (BPO) services. With an emphasis on efficiency and
                    innovation, our solutions provide unrivaled support for your
                    operations.
                </p>
                <ul data-aos="fade-left" data-aos-duration="1000">
                    <li>Customer Support</li>
                    <li>Cold Calling</li>
                    <li>Outbound Sales Calls</li>
                    <li>Email Marketing</li>
                    <li>Analytics & Reporting</li>
                    <li>Social Media Optimization</li>
                    <li>SEO & Google Adwords</li>
                    <li>Branding</li>
                </ul>
            </div>
        </section>
    );
};

export default Services;
