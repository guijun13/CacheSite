import React from 'react';
<<<<<<< HEAD
import './styles.css';
import img4 from '../../images/img4.png'
import ReactMarkdown from 'react-markdown';
// const ReactMarkdown = require('react-markdown')

function Page5(props){
  return(
    <>
      <div className="App-page">
          <div className="content-esquerda">
              <div className="texto">
                <div>
                  <ReactMarkdown source={props.markdownTextLeft} />
                </div>
              </div>
              
          </div>
          <div className="content-direita">
            <div className="texto">
              <ReactMarkdown source={props.markdownTextRight} />
            </div>
            
          </div>
        </div>
=======
import ReactMarkdown from "react-markdown";

function Page5(){
  const markdownPage5 = `
  #### Quando a cache está cheia, algumas informações devem dar espaço para as novas informações. Mas quem deverá sair?

  ## Algoritmo de substituição

  Indica se uma linha é válida ou não

  Indica se os dados armazenados no bloco da cache foram modificados ou não
  `;

  const markdownPage5a=`
  - ** LRU (Least Recently Use) ** - Recente menos utilizado. Em determinado período de tempo, aqueles que estão a mais tempo sem uso saem
  
  - ** FIFO (First In, First Out) ** - Primeiro a entrar, primeiro a sair. Remove o bloco que está a mais tempo na cache
  
  - ** LFU (Least Frequently Used) ** - Frequente menos utilizado. Em determinado intervalo de tempo, conta-se quantas vezes uma informação foi utilizada, saindo a menos utilizada
  
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
>>>>>>> backToNormal
    </>
  )
}

export default Page5;