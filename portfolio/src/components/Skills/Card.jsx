import React from 'react';


function Project({ skillTitle, skillDescription, skillIcon, skillId }) {
  return (
    <div className="skill-card">
      <div className="skill__name">
        <img src={skillIcon} alt="icon"/>
        {skillTitle}
      </div>
      <div className="skill__description">
        {skillDescription}
      </div>
    </div>
  );
}

export default Project;