import React, {Component} from 'react'
import FlippingPages from 'flipping-pages'
import 'flipping-pages/FlippingPages.css'
import Page0 from '../Page0';
import Page1 from '../Page1';

import './styles.css';

class Book extends Component {

  constructor(props) {
    super(props)

    this.totalPages = 4
    this.state = {
      selected: 0,
      page0: 0,
      page1: 1,
      page2: 2,
      page3: 3,
    }
    this.handleSelectedChange = this.handleSelectedChange.bind(this)
    this.previous = this.previous.bind(this)
    this.next = this.next.bind(this)
    this.page0 = this.page0.bind(this)
    this.page1 = this.page1.bind(this)
    this.page2 = this.page2.bind(this)
    this.page3 = this.page3.bind(this)
  }

  handleSelectedChange(selected) {
    this.setState({selected})
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

  page0(){
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

  render() {
    return (
    <div className="main-content">
        <div className="botoes">
          <h2 className="sumario">
            Sumário
          </h2>
          <button
            className="btn"
            onClick={this.page0}
            disabled={this.state.selected === this.state.page0}
          >
            Capa e instruções
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
            Conteúdo 2
          </button>
          <button
            className="btn"
            onClick={this.page3}
            disabled={this.state.selected === this.state.page3}
          >
            Conteúdo 3
          </button>
        </div>

      <div className="book-content">
        <FlippingPages
          className="App-pages"
          direction="horizontal"
          selected={this.state.selected}
          onSelectedChange={this.handleSelectedChange}
          touch-action="none"
        >
        <Page0 />
        <Page1 />
        <div className="App-page App-page_green">1</div>
        <div className="App-page App-page_blue">2</div>
        <div className="App-page App-page_orange">3</div>
        </FlippingPages>

        <div className="btnDown">
          <button
            className="btn"
            onClick={this.previous}
            disabled={!this.state.selected}
          >
            Página anterior
          </button>
          <button
            className="btn"
            onClick={this.next}
            disabled={this.state.selected + 1 === this.totalPages}
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