import Sequelize from "sequelize";

const db = new Sequelize('codegig', 'postgres', 'R34ctd3v', {
    host: 'localhost',
    dialect: 'postgres'
  });

export default db;