import React from 'react';
import ReactMarkdown from "react-markdown";

function Page12(){
  const markdownPage5 = `
  ## Tipos

  ### Inclusiva
  
  Nesse tipo os dados que está na L1 também na L2.
  
  - A vantagem desse tipo é que os dispositivos de entrada/saída quando precisam pegar um dado da cache só precisam verificar ele na L2.
  
  ### Exclusiva
  
  É garantido que o dado vá estar em pelo uma das caches (L1 ou L2).
  
  - Quando um dado tem um miss na L1 e o dado é encontrado na L2, esse dado é trocado com um bloco da L1 (perde-se um pouco do desempenho).
  - A vantagem desse tipo é ter maior capacidade (L1 + L2) no total de dados que podem ser armazenados na cache.
  
    `;

  const markdownPage5a=`
  ## Caches unificadas/separadas
  
  ### Unificada
  
  Uma única memória cache é utilizada para armazenara as referências de dados e instruções.
  
  **Vantagens:**
  
  - Em geral a taxa de acertos de memória cache unificada é maior do que em cache separadas.
  - Apenas uma memória cache precisa ser projetada e implementada.
  - É utilizada nos níveis L2 e L3.
  
  ### Separada
  
  Existe uma cache dedicada para os dados e outra cache para as instruções.
  
  **Vantagens:**
  
  - A política de escrita só precisa ser aplicada à cache de dados.
  - Existem estratégias diferentes para cada cache: tamanho total, tamanho do bloco, organização.
  - É utilizada no nível L1.

  `;

  return(
    <>
      <div className="App-page">
        <div className="content-esquerda">
          <div className="texto">
            <ReactMarkdown source={markdownPage5} />
          </div>
        </div>
        <div className="content-direita">
          <div className="texto">
            <ReactMarkdown source={markdownPage5a} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Page12;