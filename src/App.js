import './App.css';
import Search from './components/search/Search';

const api = {
  key: "48dd64b94b33bf63268037d5037ac034",
  base: "api.openweathermap.org/data/2.5/"
}

const App = () => {
  return (
    <div className="app-container">
      <main className="main">
        <Search apiInfo={api}/>
      </main>
    </div>
  );
}

export default App;
