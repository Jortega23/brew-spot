import {useState, useEffect} from 'react';
import axios from 'axios'
import Header from './components/Header'
import './App.css';

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        'https://api.openbrewerydb.org/breweries'
      )
      console.log(result.data)
      setItems(result.data)
    }

    fetchItems()
  },[])


  return (
    <div className="App">
      <Header />
      
    </div>
  );
}

export default App;
