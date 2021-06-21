import React, {useEffect, useState} from 'react';
import db from '../../firebase';
import Project from './Project';

export default function Portfolio(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    db
      .collection('projects')
      .onSnapshot(snapshot => {
        setProjects(
        snapshot.docs.map(doc => (
          {
            projectName: doc.data().projectName,
            projectUrl: doc.data().projectUrl,
            projectImg: doc.data().projectImg
          }))
        )
      })
  }, [])

  return (
    <div>
      <h1>Portfolio page</h1>
      {
        projects.map(project => (
          <div className="porfolio-project">
            <Project 
              projectName={project.projectName}
              projectImg={project.projectImg}
              projectUrl={project.projectUrl}
            />
          </div>
        ))
      }
    </div>
  );
}