import React, { useEffect } from 'react';
import CustomNav from './Header/nav'; // Corrected file name
import { Button } from 'react-bootstrap';
import Typed from 'typed.js';


const Home = () => {
 
  useEffect(() => {
    const strings = ["Your Learning Companion", "Welcome to LearnHub!", "Explore our courses and resources"];
    let index = 0;

    const typingEffect = new Typed(".multitext", {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
      loop: true,
      onStart: function (self) {
        self.strings = [strings[index]];
      },
      onStringTyped: function (index) {
        if (index === strings.length - 1) {
          self.strings = [strings[0]];
        }
      }
    });

    return () => {
      typingEffect.destroy();
    };
  }, []);

  return (
    <>
      <CustomNav />
     <section>
     <div className="section-home">
        <div className="info_contain">
          <h3>Brain<span style={{ color: "#7eec6d", margin: "0 2.3px", fontSize: "28px" }}>BOOST</span>:</h3>
          <h1> <span className='multitext'></span></h1>
          <p>
            Welcome to BrainBoost, where learning meets convenience! <span className='span_green'>Whether you're a student, educator, or lifelong learner, we have something for everyone.</span> Explore our diverse range of courses and resources designed to empower you on your learning journey.
          </p>
          <Button variant="none" href="courses"className='contact-btn w-25 p-2  course-btn' id='c-bt'>COURSES</Button>
        </div>
        <div className="image-container">
          <div className="box_1">
            <img src="../../Images/box_1.png"className='box_img' alt="" />
           <span>
           20+
            Courses
           </span>
          </div>
          <div className="box_1" id='box_1' >
            <img src="../../Images/box_2.png"className='box_img' alt="" />
           <span>
           1000+
            Students
           </span>
          </div>
          
          <img src="../../Images/std.png" alt="" className="glowing-bottom" />
          <div className="background-shape"></div>
        </div>
      
      </div>
      

      {/* Section */}
      <div className="course-section">

      <div className="course-container ">
       
       
      </div>

       
      </div>
     </section>
  
      
    </>
  );
};

export default Home;
