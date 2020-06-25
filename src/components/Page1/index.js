import React from 'react';
import ReactMarkdown from "react-markdown";
import './styles.css';
import img1 from '../../images/img1.png'

function Page1(){
  const markdownPage5 = `
  # A memória cache
  
  ## O que é? 
  #### Uma memória menor que a principal, mas possui alta velocidade de busca!

  ** Para que serve? **
  Agilizar o processo de busca
  
  ** Como funciona? **
  A cache armazena dados que possivelmente serão utilizados nos instantes
    seguintes, a alta velocidade de busca acelera o processo.
  `;

  const markdownPage5a=`
  O ** Processador ** faz o pedido, caso esteja na cache (cache hit) retorna a resposta para o processador, senão busca na memória principal para retornar (cache miss)
  
  ** Mas ** se deu cache miss deve salvar a informação na cache? 
  
  ** Sim, Write allocate: ** faz uma cópia, devolve para o processador e salva na cache

  ** Não, Write no allocate: ** apenas para o processador
  `;

  return(
    <>
      <div className="App-page">
          <div className="content-esquerda">
              <div className="texto">
                <ReactMarkdown source={markdownPage5} />
              </div>
              <img className="imgCache1" src={img1} alt="Imagem processador, cache e memoria"/>
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

export default Page1;