import React, { useState, useEffect } from 'react';
import './Home.css'; // Make sure to import your CSS file

const Home = () => {
  const [currentRole, setCurrentRole] = useState('Freelance Instructor');

  useEffect(() => {
    const roles = ['Freelance Instructor', 'UX/UI Designer', 'UX/UI Developer'];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % roles.length; 
      setCurrentRole(roles[index]);
    }, 10000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='home'>
      <div className="container">
        <h1 className="fade-in">Welcome</h1>
        <h2 className="fade-in currentRole">{currentRole}</h2>
        <p className="fade-in">
          As a passionate Freelance Instructor, I empower students and professionals through engaging training in Full Stack Development, Data Structures, and emerging technologies across diverse educational settings, including universities, corporate training programs, and hands-on workshops. Additionally, I am a skilled Website Developer with expertise in various frameworks and tools such as HTML, CSS, Bootstrap, JavaScript, jQuery, and PHP, focusing on creating dynamic and responsive websites that align with user needs and business objectives. Moreover, I possess a strong background in Lead Generation within the information technology and services industry, leveraging my skills in market research, adaptability, and problem-solving to drive growth and deliver value in a competitive landscape.
        </p>
      </div>
    </div>
  );
};

export default Home;