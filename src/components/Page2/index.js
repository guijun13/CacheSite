import React from 'react';
import ReactMarkdown from 'react-markdown';
import './styles.css';
import img2 from '../../images/img2.png'

function Page2(){
  const markdownPage5 = `
  ## Certo, já sabemos o que é, mas como é esse armazenamento?

  ### Direto:
  
  Nesse tipo cada bloco da memória principal é mapeado em um único bloco da cache.
  Ele pode ser expresso pela equação:
  
  _ i = j*mod m _
  
  i = índice do bloco na cache
  
  j = índice do bloco na memória principal
  
  m = número máximo de blocos que podem alocados na cache
  
  ** Prós: ** fácil implementação e baixo custo
  
  ** Contra: ** mais de um endereço no mesmo lugar
  
  ** Solução: ** todas as posições verificam se as informações estão corretas, porém, aumenta o tempo de processamento
  `;

  const markdownPage5a = `
  ### Campos

  A divisão dos endereços da cache vai ser feita com campos, sendo eles:

  - Tag ou rótulo (já que vários blocos da memória principal podem ser mapeados em um mesmo bloco da cache).
  - Index: resultado da operação módulo.
  - Deslocamento (byte offset ou word offset).
  - Bit de validade (para dizer se a entrada da cache contém um endereço válido).
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
            <img className="img2" src={img2} alt="Imagem armazenamento direto"/>        
            <div className="texto">
            <ReactMarkdown source={markdownPage5a} />
            </div>
          </div>
        </div>
    </>
  )
}

export default Page2;