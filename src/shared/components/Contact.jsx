import React from "react";
import contactStyles from "../css/contact.module.css";
import contact from "../../assets/images/contact-img.webp";

const Contact = () => {
  return (
    <section
      class={contactStyles.contact}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <hr />
      <h4>Contact</h4>
      <h1 class="uppercase">Let's Connect</h1>
      <div class={contactStyles.content}>
        <form action="/" method="post">
          <div
            class={contactStyles.name}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" />
          </div>
          <div
            class={contactStyles.email}
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <label for="name">Email:</label>
            <input type="text" name="email" id="email" />
          </div>
          <div
            class={contactStyles.subject}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <label for="name">Subject:</label>
            <input type="text" name="subject" id="subject" />
          </div>
          <div
            class={contactStyles.msg}
            data-aos="fade-right"
            data-aos-duration="2500"
          >
            <label for="msg">Message:</label>
            <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        <img src={contact} alt="" />
      </div>
    </section>
  );
};

export default Contact;
