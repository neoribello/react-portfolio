import React from 'react';


function Project({ skillTitle, skillDescription, skillId }) {
  return (
    <div className="skill-card">
      <div className="skill__name">
        {skillTitle}
      </div>
      <div className="skill__description">
        {skillDescription}
      </div>
    </div>
  );
}

export default Project;