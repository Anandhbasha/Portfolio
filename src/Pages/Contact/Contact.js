import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container_contact">
      <h1>Contact Me</h1>
      <p>Anandhakumar Magudeswaramuthu</p>
      <p>Mobile: +91 9715467235</p>
      <p>
        <a href="mailto:anadhakm@gmail.com" className="icon-link">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/anandhakumar-m-a26a6080/" className="icon-link">
          <i className="fab fa-linkedin"></i>
        </a>
      </p>
      <p>Address: 1/112 Katheri Samathuvapuram, Samiyampalayam (PO), Sankagiri (TK), Salem (DT) 638183</p>
    </div>
  );
};

export default Contact;
