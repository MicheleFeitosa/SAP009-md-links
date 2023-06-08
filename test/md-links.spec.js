import fetchMock from './fetchMock';
import mdLinks from '../src/index.js';

jest.mock('node-fetch', () => fetchMock);


describe('mdLinks', () => {

  test('devera devolver uma promisse', () => {
    const resultado = mdLinks('README.md')
    expect(resultado instanceof Promise).toBe(true)
  });
})


describe('Meu teste', () => {
  it('deve simular uma chamada fetch', async () => {
    // Aqui você pode escrever o código do seu teste que usa o fetch
  });
});