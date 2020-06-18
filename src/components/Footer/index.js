import React from 'react';

import './styles.css';

function Footer(){
  return(
    <>
      <div className="footer">
        <h3>2° Trabalho prático</h3>
        <h4>SSC0902 – Organização e Arquitetura de Computadores – 1º sem/2020</h4>
        <h4>
          Universidade de São Paulo<br/>
          Instituto de Ciências Matemáticas e de Computação<br/>
          Departamento de Sistemas de Computação
        </h4>
        
        <h4>Alunos:</h4>
        <ul>
          <li>Breno Alves de Sousa - 11345555</li>
          <li>Guilherme Alves Neves Tavares - 11218730</li>
          <li>Guilherme Jun Yazaki Grillo - 11208350</li>
          <li>Wellington Matos Amaral - 11315054</li>
        </ul>
      </div>
    </>
  )
}

export default Footer;