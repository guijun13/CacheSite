import React from 'react';
import ReactMarkdown from "react-markdown";

function Page7(){
  const markdownPage5 = `
  - ** LFU (Least Frequently Used) ** - Frequente menos utilizado. Em determinado intervalo de tempo, conta-se quantas vezes uma informação foi utilizada, saindo a menos utilizada
  
  
  `;

  const markdownPage5a=`
  - ** Aleatório ** - Um contador é incrementado até precisar de espaço, quando ocorrer, o enderço de memória igual ao contador sai
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

export default Page7;