import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  buttonText, 
  buttonLink,
  imageUrl,
  height = '90vh'
}) => {
  return (
    <Box
      sx={{
        height: height,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        mb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{ maxWidth: '800px' }}
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ maxWidth: '600px', fontStyle: 'italic' }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: '500px', mb: 4, fontSize: '1.2rem' }}
        >
          {description}
        </Typography>
        {buttonText && (
          <Button
            component={RouterLink}
            to={buttonLink}
            variant="contained"
            color="secondary"
            size="large"
          >
            {buttonText}
          </Button>
        )}
      </Container>
    </Box>
  );
};

export default HeroSection;