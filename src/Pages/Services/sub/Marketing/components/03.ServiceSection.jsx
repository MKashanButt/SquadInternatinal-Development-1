import React from "react";
import SectionStyles from "../../../../../assets/css/sub/DesignDevelopment.module.css";

const ServiceSection = () => {
  return (
    <section className={SectionStyles.subService}>
      <div className={SectionStyles.item}>
        <img
          src="https://www.squadtechsolution.com/images/digital-marketing.webp"
          alt=""
        />
        <h3>Digital Marketing</h3>
        <p>
          Enhance your online presence with data-driven digital marketing
          strategies. We help you reach the right audience and boost conversions
          through targeted campaigns.
        </p>
      </div>
      <div className={SectionStyles.item}>
        <img src="https://www.squadtechsolution.com/images/seo.webp" alt="" />
        <h3>SEO & Content Strategy</h3>
        <p>
          Improve search rankings and engagement with high-quality content and
          optimized SEO techniques tailored to maximize your brand's online
          visibility.
        </p>
      </div>
      <div className={SectionStyles.item}>
        <img
          src="https://www.squadtechsolution.com/images/social-media.webp"
          alt=""
        />
        <h3>Social Media Management</h3>
        <p>
          Grow your brand’s influence with strategic social media management. We
          create engaging content, build communities, and enhance brand loyalty.
        </p>
      </div>
      <div className={SectionStyles.item}>
        <img
          src="https://www.squadtechsolution.com/images/paid-ads.webp"
          alt=""
        />
        <h3>Performance Advertising</h3>
        <p>
          Maximize ROI with targeted advertising campaigns. From PPC to social
          media ads, we optimize every ad for better reach and conversion rates.
        </p>
      </div>
      <div className={SectionStyles.item}>
        <img
          src="https://www.squadtechsolution.com/images/email-marketing.webp"
          alt=""
        />
        <h3>Email Marketing</h3>
        <p>
          Engage your audience with personalized email marketing campaigns that
          drive conversions, nurture leads, and build strong customer
          relationships.
        </p>
      </div>
      <div className={SectionStyles.item}>
        <img
          src="https://www.squadtechsolution.com/images/branding.webp"
          alt=""
        />
        <h3>Brand Identity</h3>
        <p>
          Create a strong brand presence with a unique identity that resonates
          with your audience, from logo design to complete brand positioning.
        </p>
      </div>
      <div className={SectionStyles.item}>
        <img
          src="https://www.squadtechsolution.com/images/campaign.webp"
          alt=""
        />
        <h3>Marketing Campaigns</h3>
        <p>
          Execute high-impact marketing campaigns that drive engagement and
          sales, leveraging cross-channel strategies for maximum effectiveness.
        </p>
      </div>
      <div className={SectionStyles.item}>
        <img
          src="https://www.squadtechsolution.com/images/analytics.webp"
          alt=""
        />
        <h3>Analytics & Insights</h3>
        <p>
          Make data-driven decisions with in-depth analytics and reporting. We
          track performance, optimize strategies, and ensure measurable growth.
        </p>
      </div>
    </section>
  );
};

export default ServiceSection;
