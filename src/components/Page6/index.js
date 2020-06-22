import React from 'react';
import ReactMarkdown from "react-markdown";

function Page6(){
  const markdownPage5 = `
  - ** LRU (Least Recently Use) ** - Recente menos utilizado. Em determinado período de tempo, aqueles que estão a mais tempo sem uso saem
  
  
  `;

  const markdownPage5a=`
  - ** FIFO (First In, First Out) ** - Primeiro a entrar, primeiro a sair. Remove o bloco que está a mais tempo na cache
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

export default Page6;