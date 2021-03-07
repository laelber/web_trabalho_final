const Vacina = require('../models/Vacina');

class VacinaController {
  async create(req, res){
    const vacina = await Vacina.create({ 
      aplicacao_data: req.body.aplicacao_data,
      aplicacao_local: req.body.aplicacao_local,
      paciente_cpf: req.body.paciente_cpf,
      paciente_nome: req.body.paciente_nome,
      vacina_nome: req.body.vacina_nome,
      vacina_dosagem: req.body.vacina_dosagem,
      vacina_numero_dose: req.body.vacina_numero_dose,
    });

    return res.status(200).json(vacina);
  }

  async update(req, res){
    const vacina = await Vacina.findByPk(req.params.id);
    await vacina.update({ 
      aplicacao_data: req.body.aplicacao_data,
      aplicacao_local: req.body.aplicacao_local,
      paciente_cpf: req.body.paciente_cpf,
      paciente_nome: req.body.paciente_nome,
      vacina_nome: req.body.vacina_nome,
      vacina_dosagem: req.body.vacina_dosagem,
      vacina_numero_dose: req.body.vacina_numero_dose,
    });

    return res.status(200).json(vacina);
  }

  async getAll(req, res){
    const vacinas = await Vacina.findAll();

    return res.status(200).json(vacinas);
  }

  async getByID(req, res){
    const vacina = await Vacina.findByPk(req.params.id);

    return res.status(200).json(vacina);
  }

  async delete(req, res){
    const vacina = await Vacina.findByPk(req.params.id);
    await vacina.destroy();

    return res.status(200).json({});
  }
}

module.exports = new VacinaController();