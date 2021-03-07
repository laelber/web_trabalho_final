module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vacinas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      aplicacao_data: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      aplicacao_local: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      paciente_cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
      },
      paciente_nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vacina_nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vacina_dosagem: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      vacina_numero_dose: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('vacinas');
  }
};
