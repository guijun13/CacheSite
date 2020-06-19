import React, {Component} from 'react'
import FlippingPages from 'flipping-pages'
import 'flipping-pages/FlippingPages.css'
import Page0 from '../Page0';
import Page1 from '../Page1';
import Page2 from '../Page2';
import Page3 from '../Page3';
import Page4 from '../Page4';

import './styles.css';

class Book extends Component {

  constructor(props) {
    super(props)

    this.totalPages = 5
    this.state = {
      selected: 0,
      page0: 0,
      page1: 1,
      page2: 2,
      page3: 3,
      page4: 4,
    }
    this.handleSelectedChange = this.handleSelectedChange.bind(this)
    this.previous = this.previous.bind(this)
    this.next = this.next.bind(this)
    this.page0 = this.page0.bind(this)
    this.page1 = this.page1.bind(this)
    this.page2 = this.page2.bind(this)
    this.page3 = this.page3.bind(this)
    this.page4 = this.page4.bind(this)
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
  page4(){
    this.setState(state => ({
    selected: state.page4 
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
        <Page2 />
        <Page3 />
        <Page4 />
        {/* <div className="App-page App-page_green">1</div>
        <div className="App-page App-page_blue">2</div>
        <div className="App-page App-page_orange">3</div> */}
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