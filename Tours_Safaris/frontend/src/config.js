// src/config.js
const config = {
    //API_URL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
    development: 'http://localhost:8000/api/contact/',
    production: 'https://yourdomain.com/api/contact/',
  };
  
  const API_URL = config[process.env.NODE_ENV] || config.development;

  export default config;

