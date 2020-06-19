import React from 'react';
import './styles.css';
import img3 from '../../images/img3.png'

function Page3(){
  return(
    <>
      <div className="App-page">
          <div className="content-esquerda">
              <div className="texto">
                <div className="texto-armazenamento">
                  <p>
                    <b>Associativo:</b><br/>
                    Todas as posições são inicialmente vazias e são 
                    progressivamente sendo preechidas, e as tags são inequívocas <br/> 

                    <b>Prós: </b>menos cache miss <br/>
                    <b>Contra: </b>quando acabam as posições vazias, alguém tem 
                    que sair para liberar espaço <br/>
                  </p>
                </div>
              </div>
              
          </div>
          <div className="content-direita">
            <img className="img3" src={img3} alt="Imagem armazenamento associativo"/>        
          </div>
        </div>
    </>
  )
}

export default Page3;