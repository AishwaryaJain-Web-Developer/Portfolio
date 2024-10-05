import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const projects = [
  {
    title: 'Custom CRM System',
    description: 'A bespoke CRM system improving communication, task management, and client interaction.',
    link: '#',
  },
  {
    title: 'Dynamic Dashboards',
    description: 'Dashboards providing real-time insights and data visualization for decision-making.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '40px' }}>
      <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px' }}>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
                <Button href={project.link} target="_blank" style={{ marginTop: '10px' }}>
                  View Project
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
