import React from 'react';
import './styles.css';
import img1 from '../../images/img1.png'

function Page1(){
  return(
    <>
      <div className="App-page">
          <div className="content-esquerda">
            <div className="titulo1">
              <h2>
                A MEMÓRIA CACHE
              </h2>
            </div>
              <div className="texto">
                <p>
                  <b>O que é?</b><br/> Uma memória menor que a principal, mas possui alta velocidade de busca!
                </p>
                <p>
                  <b>Para que serve?</b><br/>Agilizar o processo de busca
                </p>
                <p>
                  <b>Como funciona?</b><br/>A cache armazena dados que possivelmente serão utilizados nos instantes
                  seguintes, a alta velocidade de busca acelera o processo.
                </p>
              </div>
              <img src={img1} alt="Imagem processador, cache e memoria"/>
          </div>
          <div className="content-direita">
            
            <div className="texto">
              <p>
                O <b>Processador</b> faz o pedido, caso esteja na cache 
                (cache hit) retorna a resposta para o processador, senão busca
                na memória principal para retornar (cache miss)
              </p>
              <p className="pergunta1">
                <b>Mas</b> se deu cache miss deve salvar a informação na cache? 
              </p>
              <ul className="listaRespostas1">
                <li>
                  <p>
                    <b>Sim, Write allocate:</b> faz uma cópia, devolve para o 
                    processador e salva na cache
                  </p>
                </li>
                <li>
                  <p>
                    <b>Não, Write no allocate:</b> apenas para o processador
                  </p>
                </li>
              </ul>
            </div>         
          </div>
        </div>
    </>
  )
}

export default Page1;