import React from 'react';
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
    </>
  )
}

export default Page5;