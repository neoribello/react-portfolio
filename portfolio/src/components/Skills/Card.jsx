import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Project({ skillTitle, skillDescription, skillIcon, skillId }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <FontAwesomeIcon icon={skillIcon} />
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