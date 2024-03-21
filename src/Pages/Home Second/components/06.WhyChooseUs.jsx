import React from "react";
import collaborateStyles from "../../../assets/css/HomeTwo.module.css";

const Collaborate = () => {
    return (
        <section class={collaborateStyles.collaborate}>
            <div className={collaborateStyles.content}>
                <h2>Why Choose Us?</h2>
                <p>At our core, we recognize that each customer is unique, as are their demands. That is why we take pleasure in providing bespoke solutions that are particularly designed for you. We guarantee that our services are in sync with your company objectives by paying close attention to detail and committing to understanding them.</p>
                <a href="/industries"><button>Learn More</button></a>
            </div>
            <div className={collaborateStyles.image}>
                <img src="https://www.salsoft.net/assets/images/collaborate.jpg" alt="" />
            </div>
        </section>
    );
};

export default Collaborate;
