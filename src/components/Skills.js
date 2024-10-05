import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const skills = [
  { name: 'React.js', level: 'Advanced' },
  { name: 'JavaScript (ES6+)', level: 'Advanced' },
  { name: 'Material-UI', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Intermediate' },
  { name: 'Redux', level: 'Advanced' },
  { name: 'HTML/CSS', level: 'Advanced' },
];

const Skills = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '40px' }}>
      <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px' }}>
        Skills
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                  {skill.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {skill.level}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
