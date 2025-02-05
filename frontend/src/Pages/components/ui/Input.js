import React from 'react';
import TextField from '@mui/material/TextField';

function CustomInput(props) {
  return (
    <TextField
      {...props}
      fullWidth
      variant={props.variant || 'outlined'}
    />
  );
}

export default CustomInput;