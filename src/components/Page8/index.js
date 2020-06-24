import React from 'react';
import ReactMarkdown from "react-markdown";

function Page8(){
  const markdownPage8 = `
  ## Política de escrita
  ## Definição:
  A política de escrita é necessário para que a cache possa ter conteúdos consistente em relação aos blocos da memória principal. 
  
  ### Mecanismo de escrita em hit:
  #### Write-through

  Nesse mecanismo cada escrita na memória cache é escrita imediatamente na memória principal.

  - A escrita adicional na memória principal reduz o tempo médio de acesso à cache.

  **Desvantagens:**

  - Vai se ter um tráfego considerável na memória, pode criar gargalos.

  #### Write-back

  Nesse mecanismo o bloco da cache que teve seus dados substituídos, esses dados alterados só vão ser escritos na memória principal quando aquele bloco da cache precisar ser substituído.

  `;

  const markdownPage5a=`
  **Formas de implementação:**

  - A estratégia simples: a escrita é feita mesmo que o bloco não tenha sido alterada.
  - Mais complexa: a escrita só é feita se o bit "modificado" daquele bloco estiver com valor 1, que significa que o bloco foi alterado.

  **Problema:**

  O acesso à memória principal pelos módulos de entrada/saída deve ser feito através da memória cache.

  ### Mecanismo de escrita em miss

  #### Write-allocate

  Quando um dado deve ser escrito mas ainda não está na cache (write-miss), essa política faz uma cópia do bloco na cache (read-miss) e depois escreve na cache (write-hit)

  #### No allocate

  Quando um dado deve ser escrito mas ainda não está na cache (write-miss), essa política escreve diretamente na memória principal, e o bloco não é carregado para a cache.
  `;

  return(
    <>
      <div className="App-page">
        <div className="content-esquerda">
          <div className="texto">
            <ReactMarkdown source={markdownPage8} />
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

export default Page8;