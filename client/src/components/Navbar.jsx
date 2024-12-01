import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Left side: Group 32 */}
        <Typography
          variant="h6"
          component={Link}
          to="/temperature"
          style={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          Group 32
        </Typography>

        {/* Right side: Navigation Links */}
        <Box>
          <Button color="inherit" component={Link} to="/temperature">
            Temperature
          </Button>
          <Button color="inherit" component={Link} to="/ph">
            pH
          </Button>
          <Button color="inherit" component={Link} to="/stirring">
            Stirring
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;