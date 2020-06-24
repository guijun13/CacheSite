import React from 'react';

import './styles.css';

function Footer(){
  return(
    <>
      <div className="footer">
        <div className="institucional">
          <h2>2° Trabalho prático</h2>
          <h2>SSC0902 – Organização e Arquitetura de Computadores – 1º sem/2020</h2>
          <h3>
            Universidade de São Paulo<br/>
            Instituto de Ciências Matemáticas e de Computação<br/>
            Departamento de Sistemas de Computação
          </h3>
        </div>
        <div className="alunos">
          <h3>Alunos:</h3>
          <ul>
            <li>Breno Alves de Sousa - 11345555</li>
            <li>Guilherme Alves Neves Tavares - 11218730</li>
            <li>Guilherme Jun Yazaki Grillo - 11208350</li>
            <li>Wellington Matos Amaral - 11315054</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer;