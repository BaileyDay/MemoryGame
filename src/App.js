import React from 'react';
import './App.css';
import MemoryCard from './memorycard.jsx'

function generateDeck() {
  const symbols = [`∆`, ` ß`, `£`, `§`, `•`, `$`, `+`, `ø`]
  let deck = []
  for (let i = 0; i < 16; i++) {
    deck.push({ symbol: symbols[i % 8], isFlipped: false });
  }
  shuffle(deck);
  return deck;
}
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deck: generateDeck(), pickedCards: [] };
  }

  render() {

    let cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} />
    });

    return <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <p className="subtitle">
          Match cards to win.
        </p>
      </header>
      <div>
        {cardsJSX.slice(0, 4)}
      </div>
      <div>
        {cardsJSX.slice(4, 8)}
      </div>
      <div>
        {cardsJSX.slice(8, 12)}
      </div>
      <div>
        {cardsJSX.slice(12, 16)}
      </div>
    </div>

  };
}

export default App;
