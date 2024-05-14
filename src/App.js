import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./shared/components/Header";
import Home from "./Pages/Home Second/Index";
import Services from "./Pages/Services/Index";
import Industries from "./Pages/Industries/Index";
import Blogs from "./Pages/Blogs/Index";
import AboutUs from "./Pages/AboutUs/Index";
import ContactUs from "./Pages/ContactUs/Index";
import Footer from "./shared/components/Footer Second";

import Sub from "./Pages/Services/sub/Index";

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
          <Route path="/services/telemarketing" element={<Sub page="telemarketing" />} />
          <Route path="/services/design-and-development" element={<Sub page="design-and-development" />} />
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
