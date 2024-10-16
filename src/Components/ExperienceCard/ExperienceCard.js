import React, { useState } from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="experience-card">
      <div className="card-header">
        <div className="card-title">
          <h3>{job.title}</h3>
          <p>{job.duration}</p>
        </div>
      </div>
      <div className="card-body">
        <p className="location">{job.location}</p>
        <ul>
          {expanded
            ? job.responsibilities.map((point, index) => (
                <li key={index}>{point}</li>
              ))
            : job.responsibilities.slice(0, 2).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
        </ul>
        <button className="read-more btn-info" onClick={toggleExpanded}>
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default ExperienceCard;