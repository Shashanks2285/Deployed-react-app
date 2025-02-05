import React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton(props) {
  return (
    <Button
      {...props}
      variant={props.variant || 'contained'}
      sx={{
        backgroundColor: 'red',
        '&:hover': {
          backgroundColor: 'darkred', // Darker shade on hover
        },
      }}
    >
      {props.children}
    </Button>
  );
}
