import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Client } from '@bandprotocol/bandchain.js';

async function getPrice(setPrice) {
  console.log('test2');
  const endpoint = 'https://api-gm-lb.bandchain.org';
  const client = new Client(endpoint);
  const rate = await client.getReferenceData(['BTC/USD']);
  setPrice(rate[0].rate);
}

function App() {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    console.log('test');
    getPrice(setPrice);
  }, [price]);
  return (
    <div className="App">
      <header className="App-header">
        <p>BTC Price: {price}</p>
      </header>
    </div>
  );
}

export default App;
