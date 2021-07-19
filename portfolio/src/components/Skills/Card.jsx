import React from 'react';

// Material UI
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';

function Project({ skillTitle, skillDescription, skillId }) {

  return (
    <Card className="project-card">
      <div className="project__name">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {skillTitle}
              {skillDescription}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

export default Project;