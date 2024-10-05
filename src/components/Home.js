import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="lg" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h2" style={{ fontWeight: 'bold' }}>
        Aishwarya Jain
      </Typography>
      <Typography variant="h5" style={{ margin: '20px 0' }}>
        Front-End Engineer
      </Typography>
      <Typography variant="body1" style={{ maxWidth: '600px', margin: '0 auto' }}>
        Leveraging my skills, technical knowledge, and solution-oriented mindset to craft seamless user experiences.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/contact"
        style={{ marginTop: '30px' }}
      >
        Contact Me
      </Button>
    </Container>
  );
};

export default Home;
