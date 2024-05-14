import React from 'react'
import SectionStyles from "../../../../../assets/css/sub/DesignDevelopment.module.css";

const ServiceSection = () => {
    return (
        <section className={SectionStyles.subService}>
            <div className={SectionStyles.item}>
                <img src="https://www.squadtechsolution.com/images/ui-icon.webp" alt="" />
                <h3>UI Design</h3>
                <p>Our team of UI Designing experts brings your ideas to life, creating intuitive user interfaces that enhance the user experience.</p>
            </div>
            <div className={SectionStyles.item}>
                <img src="https://www.squadtechsolution.com/images/ux-icon%20(2).webp" alt="" />
                <h3>UX Design</h3>
                <p>At Squad International, we prioritize delivering exceptional user experiences that go beyond aesthetics. Our UX Designing services focus on understanding your target audience, their behavior, and needs.</p>
            </div>
            <div className={SectionStyles.item}>
                <img src="https://www.squadtechsolution.com/images/wireframe-icon.webp" alt="" />
                <h3>Wireframing</h3>
                <p>Our skilled team excels in creating detailed wireframes that define the layout, structure, and content hierarchy of your website or application. By visualizing the user journey early on, we ensure a solid blueprint for development.</p>
            </div>
            <div className={SectionStyles.item}>
                <img src="https://www.squadtechsolution.com/images/coding-icon.webp" alt="" />
                <h3>Web Design</h3>
                <p>Our team of skilled designers combines aesthetics with functionality to create captivating online experiences. From seamless navigation to captivating graphics, we craft websites that leave a lasting impression on your audience.</p>
            </div>
            <div className={SectionStyles.item}>
                <img src="https://www.squadtechsolution.com/images/ecommerce.webp" alt="" />
                <h3>Ecommerce Solution</h3>
                <p>Unlock the potential of your online store with our comprehensive ecommerce solutions. We specialize in creating robust and scalable ecommerce platforms that empower your business to thrive in the digital marketplace.</p>
            </div>
            <div className={SectionStyles.item}>
                <img src="https://www.squadtechsolution.com/images/optimization-icon.webp" alt="" />
                <h3>Web Optimization & SEO</h3>
                <p>Maximize your online visibility and reach with our web optimization and SEO services. Our experts employ proven strategies to enhance your website's performance, improve search engine rankings, and drive organic traffic.</p>
            </div>
            <div className={SectionStyles.item}>
                <img src="https://www.squadtechsolution.com/images/logo-design.webp" alt="" />
                <h3>Logo Design</h3>
                <p>Make a lasting impression with a unique and memorable brand identity. Our Logo Designing services are dedicated to creating logos that truly represent your brand essence</p>
            </div>
            <div className={SectionStyles.item}>
                <img src="https://www.squadtechsolution.com/images/branding-icon.webp" alt="" />
                <h3>Brand Identity</h3>
                <p>Establishing a strong and cohesive Brand Identity is crucial for brand recognition and differentiation. Our experts work closely with you to develop a distinct brand identity that captures your brand essence and resonates with your target audience.</p>
            </div>
        </section>
    )
}

export default ServiceSection