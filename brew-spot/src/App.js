import {useState, useEffect} from 'react';
import axios from 'axios'
import Header from './components/Header'
import Display from './components/Display'
import './App.css';

function App() {
  //items/breweries
  const [items, setItems] = useState([])


  //fetching data from api
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        'https://api.openbrewerydb.org/breweries?per_page=5'
      )
      console.log(result.data)
      setItems(result.data)
    }

    fetchItems()
  },[])


  return (
    <div className="App">
      <Header />
      <Display items={items}/>
    </div>
  );
}

export default App;
