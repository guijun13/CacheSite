import React from 'react';
import ReactMarkdown from "react-markdown";
import './styles.css';
import img3 from '../../images/img3.png'

function Page3(){
  const markdownPage5 = `
  ## Associativo:
  Todas as posições são inicialmente vazias e são progressivamente sendo preechidas, e as tags são inequívocas

  ** Prós: **
  - menos cache miss (falha na cache para encontrar o bloco da memória principal) do que o mapeamento direto

  ** Contra: ** 
  - quando acabam as posições vazias, alguém tem que sair para liberar espaço
  - Um circuito complexo é necessário para a comparação dos rótulos de blocos da cache de forma paralela.
  - Possui alto custo de implementação e desempenho.

    `;

  const markdownPage5a=`
  ### Campos

  - Tag ou rótulo: usado para a identificação de um bloco único da memória principal.
  - Deslocamento (byte offset ou word offset).

  A determinação de um bloco se está na cache é verificado entre todos os outros blocos da cache se possui a tag daquele bloco da memória principal.

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
            <img className="img3" src={img3} alt="Imagem armazenamento associativo"/>
            <div className="texto">
              <ReactMarkdown source={markdownPage5a} />
            </div>
            
          </div>
        </div>
    </>
  )
}

export default Page3;