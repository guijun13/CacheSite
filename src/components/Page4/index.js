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

  **Prós:** menos cache-miss

  **Contra:** quando acabam as posições vazias, alguém tem que sair para liberar espaço, podendo mudar algumas linhas ou o bloco inteiro
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
          </div>
        </div>
    </>
  )
}

export default Page4;