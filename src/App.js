import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [stuff, setStuff] = React.useState('');

  const stuffToRender = [];
  for (let i in stuff) {
    stuffToRender.push(stuff)
  }
  return (
    <div className="App">
      <header className="App-header">
        <input onChange={ (e) => setStuff(e.target.value)} />
      <p>{stuffToRender.map((stuff, i) => <span key={ i }>{stuff}</span>)}</p>
      </header>
    </div>
  );
}

export default App;
