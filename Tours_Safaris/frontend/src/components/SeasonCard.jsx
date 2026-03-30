import React from 'react';
import { Paper, Typography, Box, Chip } from '@mui/material';

const SeasonCard = ({ season }) => {
  const getSeasonColor = (name) => {
    switch(name) {
      case 'January – March':
        return '#81C784'; // Spring green
      case 'April – June':
        return '#4FC3F7'; // Light blue
      case 'July – October':
        return '#FFB74D'; // Orange
      case 'November – December':
        return '#E57373'; // Coral
      default:
        return '#B39DDB';
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        border: '1px solid #E8E0D5',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '4px',
          height: '100%',
          bgcolor: getSeasonColor(season.name),
        }}
      />
      <Typography variant="h6" gutterBottom>
        {season.name}
      </Typography>
      <Typography variant="subtitle1" color="secondary" gutterBottom>
        {season.title}
      </Typography>
      <Typography variant="body2" paragraph>
        {season.description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <strong>Best viewed from:</strong> {season.best_camps}
      </Typography>
    </Paper>
  );
};

export default SeasonCard;