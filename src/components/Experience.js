import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

const experience = [
  {
    title: 'Associate Frontend Engineer',
    company: 'Repos Energy',
    duration: 'July 2022 - Present',
    description: 'Led the redesign of Partner Applications, developed custom CRM system, and integrated payment gateways.',
  },
];

const Experience = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '40px' }}>
      <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px' }}>
        Experience
      </Typography>
      {experience.map((job, index) => (
        <Card key={index} style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
              {job.title} - {job.company}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {job.duration}
            </Typography>
            <Typography variant="body1" style={{ marginTop: '10px' }}>
              {job.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Experience;
