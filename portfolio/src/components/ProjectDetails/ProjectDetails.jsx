import React, { useState, useEffect } from "react";
import db from '../../firebase';
import { useParams } from "react-router-dom";

function ProjectDetails(props) {
  const [project, setProject] = useState([]);

  const fetchProjects = async() => {
    const response = db.collection('projects');
    const data = await response.get();

    data.docs.forEach(item => {
      console.log("data", item.data)
      setProject([...project, item.data()])
    })
  }

  useEffect(() => {
    fetchProjects();
  }, [])

  console.log("project", project)

  return (
    <div>
    {
      project && project.map(p =>{
        return(
          <div className="blog-container">
            <h4>{p.projectName}</h4>
          </div>
        )
      })
    }
  </div>
  );
}

export default ProjectDetails;