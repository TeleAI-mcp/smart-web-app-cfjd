// Config module for Smart Web App
export const config = {
  apiUrl: process.env.API_URL || 'http://localhost:3000',
  environment: process.env.NODE_ENV || 'development',
};