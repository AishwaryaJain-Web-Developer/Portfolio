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

      {/* Buttons for LinkedIn, GitHub, and Resume */}
      <div style={{ marginTop: '30px' }}>
        <Button
          variant="contained"
          color="primary"
          href="https://www.linkedin.com/in/aishwarya-jain-b163161b4/" // LinkedIn URL
          target="_blank"
          style={{ marginRight: '10px' }}
        >
          LinkedIn
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href="https://github.com/AishwaryaJain-Web-Developer" // Replace with your GitHub URL
          target="_blank"
          style={{ marginRight: '10px' }}
        >
          GitHub
        </Button>
        <Button
          variant="contained"
          href="/resume.pdf" // Your resume file path (you will need to place it in the public folder)
          download
          style={{ marginRight: '10px' }}
        >
          Download Resume
        </Button>
      </div>
    </Container>
  );
};

export default Home;
