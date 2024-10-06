import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#333' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Portfolio Title with custom font style */}
        <Typography
          variant="h6"
          style={{
            opacity: 0.7,
            fontFamily: 'Arial, sans-serif', // Change the font family for the title
            fontWeight: 'bold',              // Set the font weight to bold
            fontStyle: 'italic',             // Apply italic style (optional)
            fontSize: '24px'                 // Set custom font size
          }}
        >
          Portfolio
        </Typography>

        {/* Navigation Links with custom font style */}
        <div style={{ display: 'flex' }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/"
            style={{ fontFamily: 'Courier New, monospace' }}  // Custom font for links
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/skills"
            style={{ fontFamily: 'Courier New, monospace' }}  // Custom font for links
          >
            Skills
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/experience"
            style={{ fontFamily: 'Courier New, monospace' }}  // Custom font for links
          >
            Experience
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/projects"
            style={{ fontFamily: 'Courier New, monospace' }}  // Custom font for links
          >
            Projects
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/contact"
            style={{ fontFamily: 'Courier New, monospace' }}  // Custom font for links
          >
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
