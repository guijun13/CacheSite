import React from 'react';
import ReactMarkdown from "react-markdown";
import './styles.css';
import imgCapa from "../../images/cacheCapa.jpeg";

function Page0(){
  const markdownPage5 = `
  # MEMÓRIA CACHE

  ## Definição e funções de mapeamento
  `;
  
  const markdownPage5a=`
  # Para manipular o caderno:

  - Arraste com o mouse pelas páginas, fazendo movimento de virar um página

  - Clique nos botões abaixo do livro para avançar para a próxima página ou retroceder uma página
  
  - Clique no conteúdo do sumário à esquerda, indo direto à página do assunto selecionado
  `;

  return(
    <>
      <div className="App-page">
          <div className="content-esquerda">
            <div className="titulo">
            <ReactMarkdown source={markdownPage5} />
            <img src={imgCapa} alt="Imagem memoria cache"/>
            </div>
          </div>
          <div className="content-direita">
            <div className="instrucoes">
            <ReactMarkdown source={markdownPage5a} />
            </div>            
          </div>
        </div>
    </>
  )
}

export default Page0;