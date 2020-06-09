import React from 'react';
import FlipPage from 'react-flip-page';

import './styles.css';

export default function Home() {
    return (
        <div className="content">
        <FlipPage
          showSwipeHint
          orientation="horizontal"
          className='livro'
          width='1000'
          animationDuration='1000'
          unCutPages='true'
          disableSwipe='true'
        >
          <article>
            <h1>My awesome first article</h1>
            <p>My awesome first content</p>
          </article>
          <article>
            <h1>My wonderful second article</h1>
            <p>My wonderful second content</p>
          </article>
          <article>
            <h1>My excellent third article</h1>
            <p>My excellent third content</p>
          </article>
        </FlipPage>
      </div>
    );
  }