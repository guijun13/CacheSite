import React from 'react';
import './styles.css';

function Page0(){
  return(
    <>
      <div className="App-page">
          <div className="content-esquerda">
            <div className="titulo">
              <h1>
                MEMÓRIA CACHE
              </h1>
              <h2>
                DEFINIÇÃO E FUNÇÕES DE MAPEAMENTO
              </h2>
            </div>
          </div>
          <div className="content-direita">
            <div className="instrucoes">
            <h2>
              Para manipular o caderno:
            </h2>
              
              <ul>
                <li>
                {'>'} Arraste com o mouse pelas páginas,
                  fazendo movimento de virar um página
                </li>
                <li>
                {'>'} Clique nos botões abaixo do livro para avançar para a próxima
                  página ou retroceder uma página
                </li>
                <li>
                {'>'} Clique no conteúdo do sumário à esquerda, indo direto à página
                  do assunto selecionado
                </li>
              </ul>
            </div>            
          </div>
        </div>
    </>
  )
}

export default Page0;