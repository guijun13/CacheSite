import React from 'react';
import './styles.css';
import img4 from '../../images/img4.png'

function Page4(){
  return(
    <>
      <div className="App-page">
          <div className="content-esquerda">
              <div className="texto">
                <div className="texto-armazenamento">
                  <p>
                    <b>Associativo por conjunto:</b><br/>
                    Blocos de memória principal são associados a um conjunto de linhas da cache<br/> 
                    <i>i = j*mod m </i> <br/>
                    <i>m = v*k </i> <br/>
                    v = conjunto <br/>
                    k = quantidade de linhas do conjunto <br/>
                    <b>Prós: </b>menos cache miss <br/>
                    <b>Contra: </b>quando acabam as posições vazias, alguém tem 
                    que sair para liberar espaço, podendo mudar algumas linhas ou o bloco inteiro <br/>
                  </p>
                </div>
              </div>
              
          </div>
          <div className="content-direita">
            <img className="img3" src={img4} alt="Imagem armazenamento associativo por conjunto"/>        
          </div>
        </div>
    </>
  )
}

export default Page4;