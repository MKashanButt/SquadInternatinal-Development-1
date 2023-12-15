import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./shared/components/Header";
import Home from "./Pages/Home/Index";
import Services from "./Pages/Services/Index";
import Industries from "./Pages/Industries/Index";
import Blogs from "./Pages/Blogs/Index";
import AboutUs from "./Pages/About Us/Index";
import ContactUs from "./Pages/Contact Us/Index";
import Footer from "./shared/components/Footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Header />
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
