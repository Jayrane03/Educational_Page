import React from 'react';
import "../../Styles/courses.css";
import ContactForm from './contact';
import About from './about';
const Course = () => {
  // Sample course data
  const courses = [
    {
      id: 1,
      title: "Javascript Course",
      description: "Description of the course goes here. This is a sample text to demonstrate the layout.",
      image: "../../../Images/Course_Images/javascript.jpg"
    },
    {
      id: 2,
      title: "ReactJs Course",
      description: "Description of the course goes here. This is a sample text to demonstrate the layout.",
      image: "../../../Images/Course_Images/react_2.jpg"
    },
    {
      id: 3,
      title: "UI UX Design",
      description: "Description of the course goes here. This is a sample text to demonstrate the layout.",
      image: "../../../Images/Course_Images/ui_ux.jpg"
    },
    {
      id: 4,
      title: "Java Advanced",
      description: "Description of the course goes here. This is a sample text to demonstrate the layout.",
      image: "../../../Images/Course_Images/java.jpg"
    },
    {
      id: 5,
      title: "Artificial Intelligence",
      description: "Description of the course goes here. This is a sample text to demonstrate the layout.",
      image: "../../../Images/Course_Images/ai.jpg"
    },
    {
      id: 6,
      title: "Block Chain",
      description: "Description of the course goes here. This is a sample text to demonstrate the layout.",
      image: "../../../Images/Course_Images/block.jpg"
    }
  ];

  // Function to chunk the array into groups of size 'size'
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Chunking the courses array into groups of 3
  const courseChunks = chunkArray(courses, 3);

  return (
   <>
    <About></About>
    <section className="course-section_new" id='courses'>
      <h1 className='sec-tit_new heading_text fs-2'>Courses We Provide</h1>
      <div className="course-section_new">
        {courseChunks.map((chunk, index) => (
          <div className="course-container_new" key={index}>
            {chunk.map(course => (
              <div className="course-card_new" key={course.id} id={`course_${course.id}`}>
                <div className="course_img">
                  <img src={course.image} alt="Course" />
                </div>
                <div className="course-details_new">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <button>Enroll Now</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
    <ContactForm></ContactForm>
   </>
    
  );
}

export default Course;
