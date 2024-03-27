const { species } = require('../data/zoo_data');

// Implemente a função getSpeciesByIds para buscar as espécies dos animais por meio de um ID e retorne um array contendo todos os animais dessa espécie.
//  - Faça com que a função getSpeciesByIds possa receber vários parâmetros;
//  - Retorne um array vazio se a função não receber um id;
//  - Retorne as seguintes informações do arquivo data:
//    - Se a função receber apenas um id, retorne a espécie do animal referente a este id;
//    - Se a função receber vários ids, retorne todas as espécies referente a esses ids.

const getSpeciesByIds = (species, ...ids) => {
  return species
    .filter((id = []) => ids.includes(id.id))
    .map(({ name, id }) => ({ name, id }))
};

console.log(getSpeciesByIds(species, '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));

module.exports = getSpeciesByIds;
