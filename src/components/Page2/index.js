import React from 'react';
import './styles.css';
import img2 from '../../images/img2.png'

function Page2(){
  return(
    <>
      <div className="App-page">
          <div className="content-esquerda">
              <div className="texto">
                <p>
                  Certo, já sabemos o que é, <b>mas como é esse armazenamento?</b>
                </p>
                <div className="texto-armazenamento">
                  <p>
                    <b>Direto:</b><br/>
                    Nesse tipo cada bloco da memória principal é mapeado em um único bloco da cache.
                    Ele pode ser expresso pela equação: <br/> 
                    <i>i = j*mod m </i> <br/>
                    i = índice do bloco na cache <br/>
                    j = índice do bloco na memória principal <br/>
                    m = número máximo de blocos que podem alocados na cache <br/>
                    <b>Prós: </b>fácil implementação e baixo custo<br/> 
                    <b>Contra: </b>mais de um endereço no mesmo lugar <br/>
                    <b>Solução: </b>todas as posições verificam se as 
                    informações estão corretas, porém, aumenta o tempo de processamento
                  </p>
                </div>
              </div>
              
          </div>
          <div className="content-direita">
            <img className="img2" src={img2} alt="Imagem armazenamento direto"/>        
          </div>
        </div>
    </>
  )
}

export default Page2;