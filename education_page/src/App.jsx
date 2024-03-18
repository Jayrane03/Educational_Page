import React, { useEffect } from 'react';
import Home from "./components/home"
import ScrollReveal from 'scrollreveal'; 
import Footer from "./components/Footer/footer"
import Course from "./components/Course/course"
import "../src/Styles/index.css"

function App() {
  useEffect(() => {
    const scrollReveal = ScrollReveal({
      origin: "left",
      distance: "100px",
      duration: 2000,
      delay: 200,
    });

    // Call reveal on each element you want to animate
    scrollReveal.reveal(`.info_contain`);
    scrollReveal.reveal(`.glowing-bottom`, { origin: "right" });
    scrollReveal.reveal(`.box_1`, { origin: "right" });
    scrollReveal.reveal(`.heading_text`, { origin: "top" });
    scrollReveal.reveal(`.about-text`, { origin: "left" });
    scrollReveal.reveal(`.about-img`, { origin: "right" });
    scrollReveal.reveal(`.feature`, { origin: "bottom" });
    scrollReveal.reveal(`.course-section_new`, { origin: "right" });
    scrollReveal.reveal(`.contact-image`, { origin: "left" });
    scrollReveal.reveal(`.cont-form`, { origin: "right" });
   
    return () => {
      scrollReveal.destroy();
    };
  }, []);

  return (
    <>
      <Home></Home>
      <Course></Course>
     
      <Footer />
    </>
  )
}

export default App
