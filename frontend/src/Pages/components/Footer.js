import React from 'react';
import { Box, Stack, Typography, Link as MuiLink } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => (
  <Stack
      sx={{
        zIndex: '1000', 
        // bottom :'0px'  
      }}>
  <Box sx={{  bgcolor: '#f00', color: '#fff', textAlign: 'center',height:'150px', borderRadius:'15px',paddingTop:'0', }}>
    <Typography variant="h6" mb={1}>
      Empowering your fitness journey!
    </Typography>
    <Stack direction="row" justifyContent="center" spacing={4} mb={2}>
      <MuiLink href="/home" color="#fff" underline="none">
        Home
      </MuiLink>
      <MuiLink href="/excercise" color="#fff" underline="none">
        Workouts
      </MuiLink>
      <MuiLink href="/todo" color="#fff" underline="none">
        Todo
      </MuiLink>
      <MuiLink href="/about" color="#fff" underline="none">
        About
      </MuiLink>
    </Stack>
    <Stack direction="row" justifyContent="center" spacing={2}>
      <MuiLink href="https://github.com" target="_blank" rel="noopener" color="#fff">
        <Facebook />
      </MuiLink>
      <MuiLink href="https://instagram.com" target="_blank" rel="noopener" color="#fff">
        <Twitter />
      </MuiLink>
      <MuiLink href="https://linkedin.com" target="_blank" rel="noopener" color="#fff">
        <LinkedIn />
      </MuiLink>
    </Stack>
    <Typography variant="body2" mt={2}>
      © 2025 Company. All Rights Reserved.
    </Typography>
  </Box>
  </Stack>
);

export default Footer;
