import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';

export default function CustomCard(props) {
  return (
    <Card {...props}>
      {props.title && <CardHeader title={props.title} />}
      {props.description && <CardHeader subheader={props.description} />}
      <CardContent>
        {props.children}
      </CardContent>
      {props.footer && <CardActions>{props.footer}</CardActions>}
    </Card>
  );
}
