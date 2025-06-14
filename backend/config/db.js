const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,    
  process.env.DB_USER,     
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false, 
  }
);


const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado a la base de datos PostgreSQL');
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error);
  }
};

module.exports = { sequelize, connectDB };
