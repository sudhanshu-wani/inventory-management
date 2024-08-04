import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        bgcolor: '#8C6450',
        color: 'white',
        width: '100%',
        display: 'fixed',
        bottom: 0,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body2" align="center">
        © Inventory Tracker, 2024 
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
