import React, { useState, useEffect } from "react";
import db from '../../firebase';
import { useParams } from "react-router-dom";

function ProjectDetails(props) {
  const [project, setProject] = useState([]);

  useEffect(() => {
    return db.collection('projects').onSnapshot((snapshot) => {
      const projectData = [];
      snapshot.forEach((doc) => projectData.push({ ...doc.data(), id: doc.id }));
      console.log("project DATA", projectData);
      setProject(projectData)
    })
  }, [])

  return (
    <div>
      { project.map(p => (
        <h4>
          {p.projectName}
        </h4>
      ))
      }
    </div>
  );
}

export default ProjectDetails;