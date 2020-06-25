import React from 'react';
import ReactMarkdown from "react-markdown";

function Page5(){
  const markdownPage5 = `
  #### Quando a cache está cheia, algumas informações devem dar espaço para as novas informações. Mas quem deverá sair?

  # Algoritmo de substituição

  ## Bits de controle

  **Definição:**

  Para fazer as políticas de substituição em cache, que são responsáveis por determinar qual dado deve ser substituído pelo novo dado que está sendo mandando para a cache. 
  
  Para isso é necessário utilizar-se de bits de controle em cada bloco, sendo eles:
  
  - ** Bit de validade, "V": ** indica se a entrada da cache é valida ou não, ou seja, se naquele bloco já tem algum dado válido armazenado (se aquele bloco da cache está sendo referenciado à outro bloco da memória principal).
  - ** Bit de modificação, "M": ** indica se os dados que estão armazenados naquele bloco da cache foram modificados ou não (no caso, o bloco que tem referência na cache sofreu modificação na memória principal).

  `;

  const markdownPage5a=`
  
  ## O algoritmo
  
  O algoritmo de substituição vai lidar toda vez que um bloco é levado para cache e levar em consideração:
  
  - Se não existe espaço na cache: é necessário fazer a substituição de um bloco já alocada na cache.
  - Se existe espaço: o novo bloco vai estar alocado nesse espaço livre.
  
  ### Substituição em relação ao mapeamento
  
  A forma de mapeamento da cache vai ser responsável por determinara qual bloco deve ser substituído. Então se o mapeamento for:
  
  - **Direto:** a função do mapeamento vai determinar o bloco a ser substituído (não é necessário uma politica de substituição nesse caso).
  - **Associativo e associativo por conjuntos:** requer algum algoritmo de substituição.`;

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

export default Page5;