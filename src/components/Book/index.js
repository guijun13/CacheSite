import React, {Component} from 'react'
import FlippingPages from 'flipping-pages'
import 'flipping-pages/FlippingPages.css'
import Page0 from '../Page0';
import Page1 from '../Page1';
import Page2 from '../Page2';
import Page3 from '../Page3';
import Page4 from '../Page4';
import Page5 from '../Page5';
import Page6 from '../Page6';
import Page7 from '../Page7';
import Page8 from '../Page8';
import Page9 from '../Page9';
import Page10 from '../Page10';
import Page11 from '../Page11';
import Page12 from '../Page12';

import './styles.css';

// const pages = [['test.md', 'test2.md'], ['arq1.md', 'arq2.md']]
// let currentPage = 0
// let currentMarkdown = ['# test', '# test2']
// let pagesMarkdown = []

// async function getPageMD() {
//   for (let i = 0; i < pages.length; i++) {
//     pagesMarkdown.push(['', ''])

//     await fetch(process.env.PUBLIC_URL + '/markdown/' + pages[currentPage][0]).then(async (response) => {
//       currentMarkdown[i][0] = await response.text()
  
//       return await fetch(process.env.PUBLIC_URL + '/markdown/' + pages[currentPage][1]).then(async (response) => {
//         currentMarkdown[i][1] = await response.text()
//       })
//     })
//   }
// }

class Book extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selected: 0,
      currentMarkdownLeft: '',
      currentMarkdownRight: '',
      currentPage: 0,
      totalPages: pages.length,
      page0: 0,
      page1: 1,
      page2: 2,
      page3: 3,
      page4: 4,
      page5: 5,
      page6: 6,
      page7: 7,
      page8: 8,
      page9: 9,
      page10: 10,
      page11: 11,
      page12: 12,
    }
    this.totalPages = Object.keys(this.state).length-1; //tam do objeto - 1    
    this.handleSelectedChange = this.handleSelectedChange.bind(this)
    this.previous = this.previous.bind(this)
    this.next = this.next.bind(this)
    this.page0 = this.page0.bind(this)
    this.page1 = this.page1.bind(this)
    this.page2 = this.page2.bind(this)
    this.page3 = this.page3.bind(this)
    this.page4 = this.page4.bind(this)
    this.page5 = this.page5.bind(this)
    this.page6 = this.page6.bind(this)
    this.page7 = this.page7.bind(this)
    this.page8 = this.page8.bind(this)
    this.page9 = this.page9.bind(this)
    this.page10 = this.page10.bind(this)
    this.page11 = this.page11.bind(this)
    this.page12 = this.page12.bind(this)
  }

  handleSelectedChange(currentPage) {
    this.setState({currentPage})
  }

  previous() { 
    this.setState(state => ({ selected: state.selected - 1}))
  }

  next() {
    this.setState(state => ({selected: state.selected + 1}))
  }

  page0(){
    this.setState(state => ({selected: state.page0 }))
  }

  page1(){
    this.setState(state => ({selected: state.page1 }))
  }
  page2(){
    this.setState(state => ({selected: state.page2 }))
  }
  page3(){
    this.setState(state => ({selected: state.page3 }))
  }
  page4(){
    this.setState(state => ({selected: state.page4 }))
  }
  page5(){
    this.setState(state => ({selected: state.page5}))
  }
  page6(){
    this.setState(state => ({selected: state.page6}))
  }
  page7(){
    this.setState(state => ({selected: state.page7}))
  }
  page8(){
    this.setState(state => ({selected: state.page8}))
  }
  page9(){
    this.setState(state => ({selected: state.page9}))
  }
  page10(){
    this.setState(state => ({selected: state.page10}))
  }
  page11(){
    this.setState(state => ({selected: state.page11}))
  }
  page12(){
    this.setState(state => ({selected: state.page12}))
  }

  render() {
    return (
    <div className="main-content">
        <div className="botoes">
          <h2 className="sumario">
            Sumário
          </h2>
          <button
            className="btn"
            onClick={() => this.selectPage(0)}
            disabled={this.state.currentPage == 0}
          >
            Capa e instruções
          </button>
          <button
            className="btn"
            onClick={this.testPage}
          >
            Test
          </button>
          <button
            className="btn"
            onClick={this.testPage}
          >
            Test2
          </button>
          <button
            className="btn"
            onClick={this.page1}
            disabled={this.state.selected === this.state.page1}
          >
            A memória cache
          </button>
          <button
            className="btn"
            onClick={this.page2}
            disabled={this.state.selected === this.state.page2}
          >
            Armazenamento direto
          </button>
          <button
            className="btn"
            onClick={this.page3}
            disabled={this.state.selected === this.state.page3}
          >
            Armazenamento associativo
          </button>
          <button
            className="btn"
            onClick={this.page4}
            disabled={this.state.selected === this.state.page4}
          >
            Armazenamento associativo por conjunto
          </button>
          <button
            className="btn"
            onClick={this.page5}
            disabled={this.state.selected === this.state.page5}
          >
            Algoritmo de substituição
          </button>
          <button
            className="btn"
            onClick={this.page6}
            disabled={this.state.selected === this.state.page6}
          >
            LRU e FIFO
          </button>
          <button
            className="btn"
            onClick={this.page7}
            disabled={this.state.selected === this.state.page7}
          >
            LFU e Aleatório
          </button>
          <button
            className="btn"
            onClick={this.page8}
            disabled={this.state.selected === this.state.page8}
          >
            Política de escrita
          </button>
          <button
            className="btn"
            onClick={this.page9}
            disabled={this.state.selected === this.state.page9}
          >
            Política de escrita imgs
          </button>
          <button
            className="btn"
            onClick={this.page10}
            disabled={this.state.selected === this.state.page10}
          >
            Origem das falhas(miss) 
          </button>
          <button
            className="btn"
            onClick={this.page11}
            disabled={this.state.selected === this.state.page11}
          >
            num de caches e Cache on-chip/off-chip
          </button>
          <button
            className="btn"
            onClick={this.page12}
            disabled={this.state.selected === this.state.page12}
          >
            Tipos e Caches unificadas/separadas
          </button>
        </div>

      <div className="book-content">
        <FlippingPages
          className="App-pages"
          direction="horizontal"
          selected={this.state.currentPage}
          onSelectedChange={this.handleSelectedChange}
          touch-action="none"
        >
          <Page0 />
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
          <Page7 />
          <Page8 />
          <Page9 />
          <Page10 />
          <Page11 />
          <Page12 />
        </FlippingPages>

        <div className="btnDown">
          <button
            className="btn"
            onClick={this.previousPage}
            disabled={!this.state.currentPage}
          >
            Página anterior
          </button>
          <button
            className="btn"
            onClick={this.nextPage}
            disabled={this.state.currentPage + 1 === this.totalPages}
          >
            Próxima página
          </button>
        </div>
        
      </div>
    </div>
    )
  }
}

export default Book;