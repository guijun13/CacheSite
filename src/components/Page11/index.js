import React from 'react';
import ReactMarkdown from "react-markdown";

function Page11(){
  const markdownPage5 = `
  # Número de caches

O número de caches já deve ser considerada no momento de projeção da arquitetura. Sendo levado em conta:

- Número de níveis.
- Memórias caches unificadas ou separadas.

## Níveis de memória cache

As transferências apresentam os mesmos problemas e soluções já apresentados cima.

### Nível 1 (L1): interna à pastilha do processador

Esse nível tem maior velocidade por se estar mais próxima ao processador, economizando o tráfico do barramento externo.

### Nível 2 (L2): externa/interna pastilha do processador

### Nível 3 (L3): externa à pastilha do processador

Esse nível é presente em processadores mais recentes.

 `;

  const markdownPage5a=`
  ## Cache on-chip

Tipo de cache que está na mesma patilha do processador.

- Reduz a atividade do barramento externo, diminuindo o tempo de execução a aumentando o desempenho do sistema.

- Enquanto faz acessos à cache interna o barramento fica livre para efetuar outras transferências.

## Cache off-chip

Os dados que não encontradas na cache on-chip são buscadas frequentemente na cache off-chip (externa ao processador), assim diminuindo o desempenho, devido a necessidade de transferência nos barramentos externos.

Ela é importante já que ela melhora o desempenho em relação a se ter um mesmo nível L1, já que se ter apenas uma L1 causaria uma alta transferência entre a L1 e a memória principal.
 
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

export default Page11;