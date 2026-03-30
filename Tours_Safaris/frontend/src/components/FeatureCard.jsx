import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const FeatureCard = ({ feature }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: '100%',
        textAlign: 'center',
        border: '1px solid #E8E0D5',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
        },
      }}
    >
      <Typography variant="h2" sx={{ mb: 2, fontSize: '3rem' }}>
        {feature.icon}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {feature.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {feature.description}
      </Typography>
    </Paper>
  );
};

export default FeatureCard;