import React from 'react';
import './Portfolio.scss';

// Material UI
import { makeStyles, Card, CardMedia, Button, CardContent, CardActionArea, CardActions, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
});

function Project({ projectName, projectImg, projectUrl }) {
  const classes = useStyles();
  return (
    <Card className="project-card">
      <CardMedia
        className="project-img"
        image={projectImg}
      />
      <div className="project__name">
        
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <a href={projectUrl} target="_blank">
            {projectName}
          </a>
        </Typography>
        </CardContent>
    </Card>
  );
}

export default Project;