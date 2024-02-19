import React from "react";
import sectionStyles from "../../../assets/css/Blog.module.css";
import img from "../../../assets/images/blog-one.webp";

const Blogs = () => {
  return (
    <section className={sectionStyles.blogs}>
      <h1>Blogs</h1>
      <form method="post">
        <input type="text" name="" id="search" />
        <button>
          <i class="bx bx-search-alt-2"></i>
        </button>
      </form>
      <div className={sectionStyles.stage}>
        <div className={sectionStyles.item}>
          <img src={img} alt="" />
          <div className={sectionStyles.content}>
            <h3>The Evolution of BPO: Navigating the Changing Landscape</h3>
            <p>
              In the fast-paced world of business process outsourcing (BPO), the
              only constant is change. What began as a cost-cutting tactic has
              grown into a thriving sector that provides a diverse variety of
              services to businesses throughout...
            </p>
            <button>Read</button>
          </div>
        </div>
        <div className={sectionStyles.item}>
          <img src={img} alt="" />
          <div className={sectionStyles.content}>
            <h3>Behind the Scenes: A Day in the Life of a BPO Professional</h3>
            <p>
              Working in business process outsourcing (BPO) is a vibrant and
              fast-paced job that has a distinct mix of difficulties and
              opportunities. From receiving consumer calls to managing
              complicated data analysis activities..
            </p>
            <button>Read</button>
          </div>
        </div>
        <div className={sectionStyles.item}>
          <img src={img} alt="" />
          <div className={sectionStyles.content}>
            <h3>
              The Rise of AI in BPO: Enhancing Efficiency and Customer
              Experience
            </h3>
            <p>
              Artificial intelligence (AI) is reshaping the business process
              outsourcing (BPO) market, changing how businesses offer services
              and engage with clients. AI-powered technologies, ranging from
              chatbots and virtual assistants...
            </p>
            <button>Read</button>
          </div>
        </div>
        <div className={sectionStyles.item}>
          <img src={img} alt="" />
          <div className={sectionStyles.content}>
            <h3>
              Outsourcing Beyond Borders: Exploring the Global Reach of BPO
            </h3>
            <p>
              In today's linked world, business process outsourcing (BPO) has
              become a worldwide phenomenon, with corporations outsourcing a
              variety of operations and services to service providers all over
              the world. From customer service...
            </p>
            <button>Read</button>
          </div>
        </div>
        <div className={sectionStyles.item}>
          <img src={img} alt="" />
          <div className={sectionStyles.content}>
            <h3>
              BPO Best Practices: Strategies for Streamlining Operations and
              Maximizing ROI
            </h3>
            <p>
              Business process outsourcing (BPO) has emerged as a key option for
              firms seeking to simplify processes, cut costs, and increase
              efficiency. However, maximizing the return on investment (ROI)...
            </p>
            <button>Read</button>
          </div>
        </div>
        <div className={sectionStyles.item}>
          <img src={img} alt="" />
          <div className={sectionStyles.content}>
            <h3>
              Customer-Centric Solutions: How BPO Enhances the Customer
              Experience
            </h3>
            <p>
              In today's competitive business environment, providing excellent
              customer experiences has become a major focus for businesses
              across sectors. Business process outsourcing (BPO) helps
              businesses meet...
            </p>
            <button>Read</button>
          </div>
        </div>
      </div>
      <div className={sectionStyles.pagination}>
        <button>
          <i class="bx bx-chevron-left"></i>
        </button>
        <div className={sectionStyles.page}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>..</button>
        </div>
        <button>
          <i class="bx bx-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Blogs;
