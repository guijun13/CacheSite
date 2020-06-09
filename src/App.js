import React from 'react';
import Initial from './components/Initial';
import Home from './components/Home';

import './global.css';

function App() {
  return (
    <>
    <Initial />
    <Home />
    <footer>
      <p>
        Trabalho 2 de Organização e Arquitetura de Computadores<br />
        SSC0902 - 1° sem/2020<br />
        <ul>
          <li>Breno Alves de Sousa - 11345555</li>
          <li>Guilherme Alves Neves Tavares - 11218730</li>
          <li>Guilherme Jun Yazaki Grillo - 11208350</li>
          <li>Wellington Matos Amaral - 11315054</li>
        </ul>
      </p>
    </footer>
    </>
  );
}

export default App;
