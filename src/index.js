import fs from 'fs';
import chalk from 'chalk';
import validaLink from './http-validate.js';

// a função readFile é usada para ler o conteúdo de um arquivo específico
// erro no paramentro são os dados recebidos pelo readfile no caso de erros
function trataErro(erro){
 throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'))   // lançando uma nova instancia do objeto Error do js pra lidar com os erros
}

function mdLinks(texto, caminhoDoArquivo, valida){
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
  const resultados = capturas.map(captura => ({
     text: captura[1],
     href: captura[2],
     file: caminhoDoArquivo
    }))
  if(valida){
     return validaLink(resultados);
  }
  return resultados.length !== 0 ? resultados : 'não há links no arquivo';
}


function pegarArquivo(caminhoDoArquivo, valida){
  const encoding = 'utf-8';
   return fs.promises.readFile(caminhoDoArquivo, encoding)
    .then((texto) => {
      return mdLinks(texto, caminhoDoArquivo, valida);
    })
    .catch(trataErro);
}
 export default pegarArquivo;



