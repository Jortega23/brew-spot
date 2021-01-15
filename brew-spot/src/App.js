import {useState, useEffect} from 'react';
import axios from 'axios'
import Header from './components/Header'
import Display from './components/Display'
import Search from './components/Search'
import './App.css';

function App() {
  //items/breweries
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('')


  //fetching data from api
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.openbrewerydb.org/breweries?by_city=${query}&per_page=5`
      )
      console.log(result.data)
      setItems(result.data)
    }

    fetchItems()
  },[query])


  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Display items={items}/>
    </div>
  );
}

export default App;
