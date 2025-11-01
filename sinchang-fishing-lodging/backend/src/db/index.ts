import { Sequelize } from 'sequelize';

// Database connection configuration
const sequelize = new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD || {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql', // or 'postgres', 'sqlite', etc.
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// Export the sequelize instance for use in other parts of the application
export default sequelize;