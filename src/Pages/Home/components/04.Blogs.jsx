import React from "react";
import blogStyles from "../../../assets/css/Home.module.css";

const Blogs = () => {
  return (
    <section class={blogStyles.blogs}>
      <h4 data-aos="fade-up" data-aos-duration="1000">
        Blogs
      </h4>
      <h1 data-aos="fade-up" data-aos-duration="1000" class="uppercase">
        Empowering the End-to-End
        <br />
        Customer Experience.
      </h1>
      <div class={blogStyles.circle}></div>
      <div class={blogStyles.stage}>
        <div
          class={blogStyles.item}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src='https://api.squadinternational.net/api/images/blog-one.webp?apikey=21b72d701586241ce2004e28d2276882' alt="" />
          <div class={blogStyles.content}>
            <h2>Enhancing Customer Engagement</h2>
            <p>
              Investigate novel techniques to streamlining your customer service
              operations, increasing efficiency and effectiveness. By combining
              automation and AI technology, you can greatly enhance response and
              handle client concerns faster. Dive into best practices for
              providing outstanding assistance across several channels and
              touchpoints, increasing overall customer happiness and loyalty.
            </p>
          </div>
        </div>
        <div
          class={blogStyles.item}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img src='https://api.squadinternational.net/api/images/blog-one.webp?apikey=21b72d701586241ce2004e28d2276882' alt="" />
          <div class={blogStyles.content}>
            <h2>Streamlining Customer Support</h2>
            <p>
              Unlock the keys to perfecting your customer service operations,
              guaranteeing maximum efficiency and efficacy in all interactions.
              Embrace automation and AI to improve response, resolving client
              concerns quickly and precisely. Explore best practices for
              providing exceptional assistance across several channels and
              touchpoints, resulting in long-term customer satisfaction and
              loyalty.
            </p>
          </div>
        </div>
        <div
          class={blogStyles.item}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img src='https://api.squadinternational.net/api/images/blog-one.webp?apikey=21b72d701586241ce2004e28d2276882' alt="" />
          <div class={blogStyles.content}>
            <h2>Building Customer-Centric Operations</h2>
            <p>
              Understand the importance of aligning your business processes with
              your consumers' shifting requirements and preferences. Acquire
              concrete ideas for creating a customer-centric mentality
              throughout your firm. Discover fascinating case studies and
              success stories that demonstrate how emphasizing the customer
              experience creates long-term development and profitability for
              forward-thinking businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
