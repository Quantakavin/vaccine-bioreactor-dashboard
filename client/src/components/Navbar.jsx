import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#0a2540" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/temperature"
          style={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: "bold"
          }}
        >
          Dashboard
        </Typography>

        <Box>
          <Button className="navlink" color="inherit" component={Link} to="/temperature" sx={{textTransform: "capitalize", fontWeight: "bold"}}>
            Temperature
          </Button>
          <Button className="navlink" color="inherit" component={Link} to="/ph" sx={{textTransform: "capitalize", fontWeight: "bold"}}>
            Ph
          </Button>
          <Button className="navlink" color="inherit" component={Link} to="/stirring" sx={{textTransform: "capitalize", fontWeight: "bold"}}>
            Stirring
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;