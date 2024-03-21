import React from "react";
import sectionStyles from "../../../../assets/css/Services.module.css";

const Services = () => {
  return (
    <section
      class={sectionStyles.services}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h4>Services</h4>
      <h1>
        Discover the Power of <br />
        <span>Dynamic</span> Solutions
      </h1>
      <div class={sectionStyles.stage}>
        <div className={sectionStyles.circle}></div>
        <div
          className={sectionStyles.card}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src='https://api.squadinternational.net/api/images/service.webp?apikey=21b72d701586241ce2004e28d2276882' alt="" />
          <h2>Design & Development</h2>
          <p>
            With the help of our extensive analytics and reporting services, you can gain insightful knowledge. To support well-informed decision-making and maximize the return on investment from your strategy, we monitor performance measures, examine trends, and deliver useful information.
          </p>
        </div>
        <div
          className={sectionStyles.card}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src='https://api.squadinternational.net/api/images/service.webp?apikey=21b72d701586241ce2004e28d2276882' alt="" />
          <h2>Telemarketing</h2>
          <p>
            Our telemarketing services allow you to successfully reach your
            target demographic while also offering tailored interactions to
            boost engagement and conversions.
          </p>
        </div>
        <div
          className={sectionStyles.card}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src='https://api.squadinternational.net/api/images/service.webp?apikey=21b72d701586241ce2004e28d2276882' alt="" />
          <h2>Customer Support</h2>
          <p>
            Deliver outstanding client experiences with our dedicated support
            team, which ensures timely resolution of issues and proactive help
            at all touchpoints. Improve client satisfaction and communication channels with our customer support services, which provide real-time assistance and tailored
            solutions.
          </p>
        </div>
        <div
          className={sectionStyles.card}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src='https://api.squadinternational.net/api/images/service.webp?apikey=21b72d701586241ce2004e28d2276882' alt="" />
          <h2>Email Marketing</h2>
          <p>
            Our customized email outreach services can help you expand your
            reach and nurture connections by sending captivating content and
            boosting interaction with your target demographic. With our email marketing and support services, we respond to client concerns in a
            prompt and effective manner, providing individualized assistance and
            assuring customer satisfaction with each engagement.
          </p>
        </div>
        <div
          className={sectionStyles.card}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src='https://api.squadinternational.net/api/images/service.webp?apikey=21b72d701586241ce2004e28d2276882' alt="" />
          <h2>Software Development</h2>
          <p>
            Using skilled coding and agile approaches, our team creates customized solutions that are easy to use, scalable, and compatible with a range of hardware and operating systems. They also provide quick support to meet your changing demands.
          </p>
        </div>
        <div
          className={sectionStyles.card}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src='https://api.squadinternational.net/api/images/service.webp?apikey=21b72d701586241ce2004e28d2276882' alt="" />
          <h2>Marketing Solutions</h2>
          <p>
            Strategic campaigns, original content, and focused advertising may help you build a stronger brand. For measurable results and increased consumer engagement, our data-driven solutions include lead generation, social media management, and SEO optimization.
          </p>
        </div>
        <div
          className={sectionStyles.card}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src='https://api.squadinternational.net/api/images/service.webp?apikey=21b72d701586241ce2004e28d2276882' alt="" />
          <h2>Analytics & Reporting</h2>
          <p>
            With the help of our extensive analytics and reporting services, you can gain insightful knowledge. To support well-informed decision-making and maximize the return on investment from your strategy, we monitor performance measures, examine trends, and deliver useful information.
          </p>
        </div>
        <div
          className={sectionStyles.card}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src='https://api.squadinternational.net/api/images/service.webp?apikey=21b72d701586241ce2004e28d2276882' alt="" />
          <h2>Social Media Optimization</h2>
          <p>
            Use our optimization services to improve your online visibility on social media. We create captivating content, encourage community involvement, and put plans into action to increase your visibility and influence on well-known platforms.
          </p>
        </div>
        <div
          className={sectionStyles.card}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src='https://api.squadinternational.net/api/images/service.webp?apikey=21b72d701586241ce2004e28d2276882' alt="" />
          <h2>SEO & Google Adwords</h2>
          <p>
            With our experience in Google AdWords and SEO, you can increase your online presence. In order to boost conversions and income, we optimize your website for search engines, provide targeted visitors, and design powerful advertising campaigns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
