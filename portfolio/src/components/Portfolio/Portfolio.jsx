import React, {useEffect, useState} from 'react';
import db from '../../firebase';
import Project from './Project';

export default function Portfolio(props) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    db
      .collection('projects')
      .orderBy('projectName', 'desc')
      .onSnapshot(snapshot => {
        setProjects(
        snapshot.docs.map(doc => (
          { 
            projectId: doc.id,
            projectName: doc.data().projectName,
            projectUrl: doc.data().projectUrl,
            projectImg: doc.data().projectImg
          }))
        )
      })
  }, []);

  return (
    <section className="project-container">
      <h2 className="project-title">My Projects</h2>
      <div className="project-content">
        {
          projects.map(project => (
            <Project
              className="no-underline"
              projectId={project.projectId}
              projectName={project.projectName}
              projectImg={project.projectImg}
              projectUrl={project.projectUrl}
            />
          ))
        }
      </div>
    </section>
    
  );
}