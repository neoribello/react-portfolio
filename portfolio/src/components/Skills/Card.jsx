import React from 'react';


function Project({ skillTitle, skillDescription, skillId }) {
  return (
    <div className="project-card">
      <div className="project__name">
        {skillTitle}
      </div>
    </div>
  );
}

export default Project;