import React from 'react';
import './App.css';

import Header from './Components/Header';
import Card from './Components/Card';

function App() {
  return (
    <div >             
      <Header/>
      <div className="container">
        <Card />
      </div>
    </div>
  );
}

export default App;