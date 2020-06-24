import React from 'react';
import ReactMarkdown from "react-markdown";
import LFU from '../../images/lfu.png';
import aleatorio from '../../images/aleatorio.png';

  // **Implementação (uma das formas):**

  // - Cada bloco tem um contador e esse contador é incrementando a cada ciclo de clock .
  // - Quando uma substituição é necessário é escolhido o bloco cujo endereço é igual ao valor do contador.

function Page7(){
  const markdownPage5 = `
  ### LFU (Least Frequently Used)
  Frequente menos utilizado. Em determinado intervalo de tempo, conta-se quantas vezes uma informação foi utilizada, saindo a menos utilizada
  
  O tempo nesse método utiliza-se da mesma estratégia de contadores da LRU e então é feito o cálculo desse contador pelo tempo.
  `;

  const markdownPage5a=`
  ### Aleatório
  Um contador é incrementado até precisar de espaço, quando ocorrer, o enderço de memória igual ao contador sai
  
  **Problema:**

  Pode ter uma grande quantidade miss se os blocos selecionados pelo algoritmo de números aleatórios tiver preferência por blocos que são muito utilizados na cache.
  `;

  return(
    <>
      <div className="App-page">
        <div className="content-esquerda">
          <div className="texto">
            <ReactMarkdown source={markdownPage5} />
            <img src={LFU} alt=""/>
          </div>
        </div>
        <div className="content-direita">
          <div className="texto">
            <ReactMarkdown source={markdownPage5a} />
            <img src={aleatorio} alt=""/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page7;