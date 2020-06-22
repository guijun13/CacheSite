import React from 'react';
import ReactMarkdown from "react-markdown";

function Page10(){
  const markdownPage5 = `
    Page 10: origem das falhas
  `;

  const markdownPage5a=`
  
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

export default Page10;