import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container
      maxWidth="lg"
      style={{
        textAlign: 'center',
        marginTop: '80px',
        background: 'linear-gradient(135deg, #f0f4f8, #d9e3f0)', // Light gradient background
        padding: '50px',
        borderRadius: '12px',
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)', // Subtle shadow effect
      }}
    >
      <Typography
        variant="h2"
        style={{
          fontWeight: 'bold',
          fontSize: '3rem',
          color: '#333',
          marginBottom: '20px',
        }}
      >
        Aishwarya Jain
      </Typography>

      <Typography
        variant="h5"
        style={{
          fontWeight: '300',
          color: '#555',
          marginBottom: '30px',
        }}
      >
        Front-End Engineer
      </Typography>

      <Typography
        variant="body1"
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          color: '#666',
          fontSize: '1.2rem',
          lineHeight: '1.6',
        }}
      >
        Leveraging my skills, technical knowledge, and solution-oriented mindset to craft seamless user experiences.
      </Typography>

      {/* Buttons for LinkedIn, GitHub, and Resume */}
      <div style={{ marginTop: '40px' }}>
        <Button
          variant="contained"
          color="primary"
          href="https://www.linkedin.com/in/aishwarya-jain-b163161b4/"
          target="_blank"
          style={{
            marginRight: '10px',
            borderRadius: '30px',
            padding: '10px 20px',
            fontSize: '1rem',
            textTransform: 'none',
          }}
        >
          LinkedIn
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href="https://github.com/AishwaryaJain-Web-Developer"
          target="_blank"
          style={{
            marginRight: '10px',
            borderRadius: '30px',
            padding: '10px 20px',
            fontSize: '1rem',
            textTransform: 'none',
          }}
        >
          GitHub
        </Button>
        <Button
          variant="contained"
          href="/resume.pdf"
          download
          style={{
            marginRight: '10px',
            borderRadius: '30px',
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#4caf50',
            color: '#fff',
            textTransform: 'none',
          }}
        >
          Download Resume
        </Button>
      </div>
    </Container>
  );
};

export default Home;
