const { employees } = require('../data/zoo_data');
const getEmployeeByName = require('../src/getEmployeeByName');

describe('Verifica a função getEmployeeByName', () => {
  it('Recebe nome do empregado e retorna os dados', () => {
    expect(getEmployeeByName(employees, 'Burl')).toEqual({
      id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
      firstName: 'Burl',
      lastName: 'Bethea',
      managers: [ '9e7d4524-363c-416a-8759-8aa7e50c0992' ],
      responsibleFor: [
        '0938aa23-f153-4937-9f88-4858b24d6bce',
        'e8481c1d-42ea-4610-8e11-1752cfc05a46',
        'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
        'ef3778eb-2844-4c7c-b66c-f432073e1c6b'
      ]
    })
  })
  it('Recebe sobrenome do empregado e retorna os dados', () => {
    expect(getEmployeeByName(employees, 'Bethea')).toEqual({
      id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
      firstName: 'Burl',
      lastName: 'Bethea',
      managers: [ '9e7d4524-363c-416a-8759-8aa7e50c0992' ],
      responsibleFor: [
        '0938aa23-f153-4937-9f88-4858b24d6bce',
        'e8481c1d-42ea-4610-8e11-1752cfc05a46',
        'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
        'ef3778eb-2844-4c7c-b66c-f432073e1c6b'
      ]
    })
  })
})
