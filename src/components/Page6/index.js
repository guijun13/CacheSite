import React from 'react';
import ReactMarkdown from "react-markdown";
import LRU from '../../images/LRU.jpeg';
import FIFO from '../../images/fifo.png';

function Page6(){
  // **Implementação:**

  // A implementação mais simples para se fazer em hardware é criar um contador associada a cada bloco. Esse contador tem base no seguinte:

  // - Quando ocorre um acerto ("Hit" na cache), o contador do bloco (responsável pelo hit) vai para zero e os demais contadores são incrementados.
  // - O bloco com o contador mais alto é levado em consideração para fazer a substituição.

  const markdownPage6 = `
  ### LRU (Least Recently Use)
  Recente menos utilizado. Em determinado período de tempo, aqueles que estão a mais tempo sem uso saem
  
  **Problema:**

  Quanto maior a quantidade de blocos, maior é a quantidade de bits (dos contadores) para gerenciar.
  

  `;

  const markdownPage6a=`
  ### FIFO (First In, First Out)
  Primeiro a entrar, primeiro a sair. Remove o bloco que está a mais tempo na cache

  **Problema:**

  É possível ter muito "miss" em instruções como loop.

  
  `;

  return(
    <>
      <div className="App-page">
        <div className="content-esquerda">
          <div className="texto">
            <ReactMarkdown source={markdownPage6} />
            <img src={LRU} alt="imagem lru"/>
          </div>
        </div>
        <div className="content-direita">
          <div className="texto">
            <ReactMarkdown source={markdownPage6a} />
            <img src={FIFO} alt="imagem fifo"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page6;