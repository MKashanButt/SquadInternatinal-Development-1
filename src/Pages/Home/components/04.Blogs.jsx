import React from "react";
import blogStyles from "../../../assets/css/Home.module.css";
import blog from "../../../assets/images/blog-one.webp";

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
          <img src={blog} alt="" />
          <div class={blogStyles.content}>
            <h2>Blog One</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad
              nemo, sapiente sequi pariatur fugiat totam aut repellat impedit.
              Cupiditate, maxime. Repudiandae placeat mollitia maiores sequi
              totam porro harum dicta aperiam fugit!
            </p>
          </div>
        </div>
        <div
          class={blogStyles.item}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img src={blog} alt="" />
          <div class={blogStyles.content}>
            <h2>Blog Two</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad
              nemo, sapiente sequi pariatur fugiat totam aut repellat impedit.
              Cupiditate, maxime. Repudiandae placeat mollitia maiores sequi
              totam porro harum dicta aperiam fugit!
            </p>
          </div>
        </div>
        <div
          class={blogStyles.item}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img src={blog} alt="" />
          <div class={blogStyles.content}>
            <h2>Blog Three</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad
              nemo, sapiente sequi pariatur fugiat totam aut repellat impedit.
              Cupiditate, maxime. Repudiandae placeat mollitia maiores sequi
              totam porro harum dicta aperiam fugit!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
