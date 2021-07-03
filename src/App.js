import './App.css';
import Search from './components/search/Search';
import Location from './components/location/Location';
import Temp from './components/temperature/Temperature';

const api = {
  key: "48dd64b94b33bf63268037d5037ac034",
  base: "api.openweathermap.org/data/2.5/"
}

const App = () => {
  return (
    <div className="app-container">
      <main className="main">
        <Search apiInfo={api}/>
        <Location />
        <Temp />
      </main>
    </div>
  );
}

export default App;
