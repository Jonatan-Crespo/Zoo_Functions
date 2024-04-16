const { employees } = require('../data/zoo_data');

// Buscar os nomes dos empregados, atraves do seu primeiro nome ou do sobrenome.
// - Usar o find para encontrar o primeiro nome no banco de dados
// Trazer todos os dados desse usuário
//   {
//   id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//   firstName: 'Nigel',
//   lastName: 'Nelson',
//   managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83', 'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
//   responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'],
//   }

const getEmployeeByName = (data, employeeName) => {
  return data
    .find((name = []) => employeeName.includes(name.firstName) || employeeName.includes(name.lastName));
}

console.log(getEmployeeByName(employees, 'Bethea'));

module.exports = getEmployeeByName;
