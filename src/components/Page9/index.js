import React from 'react';
import ReactMarkdown from "react-markdown";
import diagrama1 from '../../images/diagrama1.png';
import diagrama2 from '../../images/diagrama2.png';

function Page9(){
  const markdownPage5 = `
  ** Write-through (write-hit) e No-write allocate(write-miss) **
  `;

  const markdownPage5a=`
  ** Write-back (write-hit) e Write allocate (write-miss) **
  `;

  return(
    <>
      <div className="App-page">
        <div className="content-esquerda">
          <div className="texto">
            <ReactMarkdown source={markdownPage5} />
            <img src={diagrama1} alt="Write-through (write-hit) e No-write allocate(write-miss)"/>
          </div>
        </div>
        <div className="content-direita">
          <div className="texto">
            <ReactMarkdown source={markdownPage5a} />
            <img src={diagrama2} alt=""/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page9;