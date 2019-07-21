import React from 'react';
import logo from './logo.svg';
import './App.css';

async function go(url) {
  var response = await fetch(url)
  // console.log(response)
  var data = await response.json()
  console.log(data)
  return JSON.stringify(data)
}

go('http://localhost:3000')

function App() {
  const data = go('http://localhost:3000//products/:id');
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {'123'}
        </a>
      </header>
    </div>
  );
}

export default App;
