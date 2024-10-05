import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '40px' }}>
      <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px' }}>
        Contact Me
      </Typography>
      <form noValidate autoComplete="off">
        <TextField fullWidth label="Name" variant="outlined" style={{ marginBottom: '20px' }} />
        <TextField fullWidth label="Email" variant="outlined" style={{ marginBottom: '20px' }} />
        <TextField fullWidth label="Message" multiline rows={4} variant="outlined" style={{ marginBottom: '20px' }} />
        <Button variant="contained" color="primary" fullWidth>
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
