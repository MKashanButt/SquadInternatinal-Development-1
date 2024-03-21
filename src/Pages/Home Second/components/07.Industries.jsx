import React from "react";
import industriesStyles from "../../../assets/css/Home.module.css";

const Industries = () => {
    return (
        <section class={industriesStyles.industries}>
            <hr />
            <h1 data-aos="fade-up" data-aos-duration="1000" class="uppercase">
                We have a solution fit to your needs
            </h1>
            <div class={industriesStyles.stage}>
                <div
                    class={industriesStyles.item}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <i class="bx bx-plus-medical"></i>
                    <p>Healthcare</p>
                </div>
                <div
                    class={industriesStyles.item}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <i class="bx bxs-briefcase"></i>
                    <p>Travel</p>
                </div>
                <div
                    class={industriesStyles.item}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <i class="bx bxs-shopping-bag"></i>
                    <p>Retail</p>
                </div>
                <div
                    class={industriesStyles.item}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <i class="bx bxs-credit-card-front"></i>
                    <p>Financial Services</p>
                </div>
                <div
                    class={industriesStyles.item}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <i class="bx bxs-business"></i>
                    <p>Ecommerce</p>
                </div>
                <div
                    class={industriesStyles.item}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <i class="bx bxs-factory"></i>
                    <p>Manufacturing</p>
                </div>
                <div
                    class={industriesStyles.item}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <i class="bx bxs-truck"></i>
                    <p>Logistics</p>
                </div>
            </div>
            <hr />
        </section>
    );
};

export default Industries;
