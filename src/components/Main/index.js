import React from 'react';
import Book from '../Book';
import Footer from '../Footer'
import './styles.css';

export default function Main(){
  return(
    <div className="content">
      <header>
        <h1 className="icons">
          <i class="fas fa-chalkboard-teacher"></i>
          <i class="fas fa-plus"></i>
          <i class="fas fa-microchip"></i>
          <i class="fas fa-equals"></i>
          <i class="fas fa-laugh-beam"></i>
        </h1>
      </header>
      <div className="main">
        <Book />
      </div>
      <Footer />
    </div>
  )
}