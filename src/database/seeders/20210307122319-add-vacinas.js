module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'vacinas',
      [
        {
          aplicacao_data: new Date(),
          aplicacao_local: 'Russas/CE',
          paciente_cpf: '11122233344',
          paciente_nome: 'Laelber',
          vacina_nome: 'Teste',
          vacina_dosagem: 0.5,
          vacina_numero_dose: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('vacinas', null, {});
  },
};
