import React, {Component} from 'react'
import FlippingPages from 'flipping-pages'
import 'flipping-pages/FlippingPages.css'
import Page0 from '../Page0';
import Page1 from '../Page1';
import Page2 from '../Page2';
import Page3 from '../Page3';
import Page4 from '../Page4';
import Page5 from '../Page5';

import './styles.css';

const pages = [['test.md', 'test2.md'], ['arq1.md', 'arq2.md']]
let currentPage = 0
let currentMarkdown = ['# test', '# test2']
let pagesMarkdown = []

async function getPageMD() {
  for (let i = 0; i < pages.length; i++) {
    pagesMarkdown.push(['', ''])

    await fetch(process.env.PUBLIC_URL + '/markdown/' + pages[currentPage][0]).then(async (response) => {
      currentMarkdown[i][0] = await response.text()
  
      return await fetch(process.env.PUBLIC_URL + '/markdown/' + pages[currentPage][1]).then(async (response) => {
        currentMarkdown[i][1] = await response.text()
      })
    })
  }
}

class Book extends Component {

  constructor(props) {
    super(props)

    this.totalPages = 6
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
    }
    this.handleSelectedChange = this.handleSelectedChange.bind(this)
    /*this.previous = this.previous.bind(this)
    this.next = this.next.bind(this)*/
    /*this.page0 = this.page0.bind(this)
    this.page1 = this.page1.bind(this)
    this.page2 = this.page2.bind(this)
    this.page3 = this.page3.bind(this)
    this.page4 = this.page4.bind(this)
    this.page5 = this.page5.bind(this)*/
    this.testPage = this.testPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
    this.changePage = this.changePage.bind(this)
    this.selectPage = this.selectPage.bind(this)
  }

  handleSelectedChange(currentPage) {
    this.setState({currentPage})
  }

  previous() {
    this.setState(state => ({
    selected: state.selected - 1
    }))
  }

  next() {
    this.setState(state => ({
    selected: state.selected + 1
    }))
  }

  /*page0(){
    this.setState(state => ({
    selected: state.page0 
    }))
  }
  page1(){
    this.setState(state => ({
    selected: state.page1 
    }))
  }
  page2(){
    this.setState(state => ({
    selected: state.page2 
    }))
  }
  page3(){
    this.setState(state => ({
    selected: state.page3 
    }))
  }
  page4(){
    this.setState(state => ({
    selected: state.page4 
    }))
  }
  page5(){
    this.setState(state => ({
    selected: state.page5 
    }))
  }*/

  changePage(newPage) {
    this.setState(state => ({
      currentPage: newPage
    }))
  }

  async testPage() {
    //await getPage('test.md')
    this.setState(state => ({
      currentMarkdownLeft: currentMarkdown[0],
      currentMarkdownRight: currentMarkdown[1]
    }))
  }

  async previousPage() {
    if (currentPage > 0) {
      currentPage -= 1
    }

    this.changePage(currentPage)
    //await this.getPage()
  }

  async nextPage() {
    if ((currentPage + 1) < pages.length) {
      currentPage += 1
    }

    this.changePage(currentPage)
    //await this.getPage()
  }

  async getPage() {
    /*await getPageMD()
    this.setState(state => ({
      currentMarkdownLeft: currentMarkdown[0],
      currentMarkdownRight: currentMarkdown[1]
    }))*/
  }

  selectPage(page) {
    currentPage = page

    this.changePage(currentPage)
    //this.getPage()
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
          {/*<button
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
            Pag 5
          </button>*/}
        </div>

      <div className="book-content">
        <FlippingPages
          className="App-pages"
          direction="horizontal"
          selected={this.state.currentPage}
          onSelectedChange={this.handleSelectedChange}
          touch-action="none"
        >
          {/* <Page0 />
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 /> */}
          <Page5 markdownTextLeft={this.state.currentMarkdownLeft} markdownTextRight={this.state.currentMarkdownRight} />
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

  async componentDidMount() {
    await this.getPage()
  }
}

export default Book;