import React from 'react';


function Project({ skillTitle, skillDescription, skillIcon, skillId }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <img src={skillIcon} alt="icon"/>
      </div>
      <h4 className="skill-name">
        {skillTitle}
      </h4>
      <div className="skill-description">
        {skillDescription}
      </div>
    </div>
  );
}

export default Project;