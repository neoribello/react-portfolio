import React from 'react';

function Project({ projectName, projectImg, projectUrl }) {
  return (
    <div className="project">
      <a href={projectUrl} target="_blank">
        <div className="project__top">
          {projectName}
        </div>
        <div className="project__bottom">
          <img src={projectImg} alt="" />
        </div>
      </a>
    </div>
  );
}

export default Project;