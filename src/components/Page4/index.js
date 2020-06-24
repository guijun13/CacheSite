import React from 'react';
import './styles.css';
import ReactMarkdown from 'react-markdown';
import img4 from '../../images/img4.png'

function Page4(){
  const markdownPage4 = `
  ## Associativo por conjunto:
  Blocos de memória principal são associados a um conjunto de linhas da cache

  *i = j⋅mod m*

  *m = v⋅k*

  **Prós:** 
  - Redução da quantidade de verificações em relação ao método associativo, já que cada bloco só vai ter verificação dentro do próprio conjunto.
  - Taxa de acerto maior, já que agora possui mais de uma linha possível para mapear blocos do mesmo conjunto.
  - Rótulo menor, já que o rótulo é relacionado ao conjunto daquele bloco.

  **Contra:** 
  - Quando acabam as posições vazias, alguém tem que sair para liberar espaço, podendo mudar algumas linhas ou o bloco inteiro
  - Assim como o método associativo vai precisar de um circuito complexo.
  `;

  const markdownPage4a = `
  ### Campos

  - Tag ou rótulo.
  - Set ou conjunto.
  - Deslocamento (byte offset ou word offset).
  
  Cada bloco da memória principal vai ser associada a um conjunto v e dentro desse um conjunto aquele bloco vai ter k linhas que podem ser usados para alocar o bloco.
  `;
  
  return(
    <>
      <div className="App-page">
          <div className="content-esquerda">
            <div className="texto">
              <div className="texto-armazenamento">
                <ReactMarkdown source={markdownPage4} />
              </div>
            </div>
              
          </div>
          <div className="content-direita">
            <img className="img3" src={img4} alt="Imagem armazenamento associativo por conjunto"/>
            <div className="texto">
            <ReactMarkdown source={markdownPage4a} />
            </div> 
          </div>
        </div>
    </>
  )
}

export default Page4;