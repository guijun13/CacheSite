import React from 'react';
import ReactMarkdown from "react-markdown";

function Page10(){
  const markdownPage5 = `
  # Origem das falhas (miss)

## Compulsórias

Essas falhas são causadas pelo primeiro acesso a um bloco que nunca esteve na cache.

## Capacidade

Falhas causadas quando a cache não consegue conter todos os blocos necessários durante a execução de um determinado programa, ou seja, elas acontecem quando os blocos são continuamente substituídos e recuperados.

## Conflito (ou colisão)

Ocorrem quando vários blocos disputam o mesmo conjunto, ou seja, ocorre quando se há mapeamento direto ou mapeamento associativo por conjunto.
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