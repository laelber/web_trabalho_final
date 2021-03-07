const Sequelize = require('sequelize')
const { Model } = require('sequelize');

class Vacina extends Model {
  static init(sequelize) {
    super.init(
      {
        aplicacao_data: Sequelize.DATE,
        aplicacao_local: Sequelize.STRING,
        paciente_cpf: Sequelize.STRING(11),
        paciente_nome: Sequelize.STRING,
        vacina_nome: Sequelize.STRING,
        vacina_dosagem: Sequelize.DOUBLE,
        vacina_numero_dose: Sequelize.INTEGER,
      },
      {
        sequelize
      }
    );

    return this;
  }
}

module.exports = Vacina;