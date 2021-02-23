import React, {useState, useEffect} from 'react';
import Header from './Components/Header';
import CharacterGrid from './Components/character/CharacterGrid';
import Search from './Components/Search';

import axios from 'axios';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLooding, setLooding] = useState(true);
  const [Quary, setQuary] = useState('');

  useEffect(() => {
    const featchItems = async () => {
      const {data} = await axios(
        `https://breakingbadapi.com/api/characters?name=${Quary}`
      );
      console.log(data);
      setItems(data);
      setLooding(false);
    };
    featchItems();
  }, [Quary]);
  return (
    <div className="container">
      <Header />
      <Search getQuary={(q) => setQuary(q)} />
      <CharacterGrid isLooding={isLooding} items={items} />
    </div>
  );
};

export default App;
