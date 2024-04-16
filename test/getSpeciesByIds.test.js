const { species } = require('../data/zoo_data');
const getSpeciesByIds = require('../src/getSpeciesByIds');

describe('Verifica se a Função getSpeciesByIds', ()=>{
    it('Teste para saber se é uma função', () => {
        expect(typeof getSpeciesByIds).toBe(`function`)
    });
    it('Teste para saber se está retornando a espécie do animal e seu ID de um animal', () => {
        expect(getSpeciesByIds(species, '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae')).toEqual([{ id: '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae', name: 'otters' }])
    });
    it('Teste para saber se está retornando a quantidade de espécie do animal e seu ID', () => {
        expect(getSpeciesByIds(species, '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae', 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'))
            .toEqual([{ id: '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae', name: 'otters' }, { id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5', name: 'elephants' }])
    });
});