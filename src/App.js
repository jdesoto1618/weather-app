import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Search from './components/search/Search';
import Location from './components/location/Location';
import Temp from './components/temperature/Temperature';

const api = {
  key: "",
  base: "api.openweathermap.org/data/2.5/"
}

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const search = event => {
    if(event.key === 'Enter') {
      axios.get(`api.openweathermap.org/data/2.5/weather?query=${query}&appid=${api.key}`)
        .then((response) => {
          console.log(response);
          setWeather(response);
          setQuery('');
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  return (
    <div className="app-container">
      <main className="main">
        <Search apiInfo={api} search={search} query={query} setQuery={setQuery}/>
        <Location />
        <Temp />
      </main>
    </div>
  );
}

export default App;
