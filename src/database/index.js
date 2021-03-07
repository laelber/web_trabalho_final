const Sequelize = require('sequelize');

const Vacina = require('../app/models/Vacina');

const databaseConfig = require('../config/database');

const models = [Vacina];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));

    models.map(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }
}

module.exports = new Database();
