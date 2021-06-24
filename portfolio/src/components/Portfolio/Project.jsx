import React from 'react';
import {  useHistory } from "react-router-dom";
import './Portfolio.scss';

// Material UI
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';

function Project({ projectName, projectImg, projectUrl, projectId }) {
  const history = useHistory();
  

  const handleClick = (id) => {
    console.log("project item", id)
    // history.push(`/projects/${projectId}`)
  };

  return (
    <Card className="project-card">
      <CardMedia
        className="project-img"
        image={projectImg}
      />
      <div className="project__name">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <a href={projectUrl} target="_blank" rel="noreferrer">
              {projectName}
            </a>
          </Typography>
        </CardContent>
      </div>
      <Button
        onClick={() => handleClick(projectId)}
      >
        Test
      </Button>
    </Card>
  );
}

export default Project;