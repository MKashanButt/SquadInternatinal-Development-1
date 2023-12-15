import React from "react";
import sectionStyles from "../../../assets/css/Blog.module.css";
import img from "../../../assets/images/blog-one.webp";

const Blogs = () => {
  return (
    <section
      className={sectionStyles.blogs}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1>Blogs</h1>
      <form method="post">
        <input type="text" name="" id="search" />
        <button>
          <i class="bx bx-search-alt-2"></i>
        </button>
      </form>
      <div className={sectionStyles.stage}>
        <div
          className={sectionStyles.item}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={img} alt="" />
          <div className={sectionStyles.content}>
            <h3>Blog</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus consequuntur at vel sunt vitae natus accusantium
              similique cupiditate aut minima unde corrupti quod reiciendis,
              nesciunt veniam odio, adipisci nam maiores?
            </p>
            <button>Read</button>
          </div>
        </div>
        <div
          className={sectionStyles.item}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={img} alt="" />
          <div className={sectionStyles.content}>
            <h3>Blog</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus consequuntur at vel sunt vitae natus accusantium
              similique cupiditate aut minima unde corrupti quod reiciendis,
              nesciunt veniam odio, adipisci nam maiores?
            </p>
            <button>Read</button>
          </div>
        </div>
        <div
          className={sectionStyles.item}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={img} alt="" />
          <div className={sectionStyles.content}>
            <h3>Blog</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus consequuntur at vel sunt vitae natus accusantium
              similique cupiditate aut minima unde corrupti quod reiciendis,
              nesciunt veniam odio, adipisci nam maiores?
            </p>
            <button>Read</button>
          </div>
        </div>
        <div
          className={sectionStyles.item}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={img} alt="" />
          <div className={sectionStyles.content}>
            <h3>Blog</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus consequuntur at vel sunt vitae natus accusantium
              similique cupiditate aut minima unde corrupti quod reiciendis,
              nesciunt veniam odio, adipisci nam maiores?
            </p>
            <button>Read</button>
          </div>
        </div>
        <div
          className={sectionStyles.item}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={img} alt="" />
          <div className={sectionStyles.content}>
            <h3>Blog</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus consequuntur at vel sunt vitae natus accusantium
              similique cupiditate aut minima unde corrupti quod reiciendis,
              nesciunt veniam odio, adipisci nam maiores?
            </p>
            <button>Read</button>
          </div>
        </div>
        <div
          className={sectionStyles.item}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={img} alt="" />
          <div className={sectionStyles.content}>
            <h3>Blog</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus consequuntur at vel sunt vitae natus accusantium
              similique cupiditate aut minima unde corrupti quod reiciendis,
              nesciunt veniam odio, adipisci nam maiores?
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
