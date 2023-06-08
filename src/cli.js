#! /usr/bin/env node 
import chalk from 'chalk';
import pegarArquivo from './index.js';

const caminho = process.argv; // objeto do node e valores de argumento 

function processaTexto(caminho){
   const valida = caminho.includes('--validate');
    pegarArquivo(caminho[2], valida)
      .then(resultado => {
        console.log(chalk.yellow('lista de links'), resultado);
      })
      .catch(erro => {
        console.error(chalk.red('Ocorreu um erro ao processar o arquivo:', erro));
      });
      
  }
  
  processaTexto(caminho);