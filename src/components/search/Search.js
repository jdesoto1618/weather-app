import './search.css';

const Search = ({ apiInfo }) => {
  return (
    <div className='conponent-container search-container'>
      <div className='search-box'>
        <input
          type='text'
          className='search-bar'
          placeholder='Search...'
        />
      </div>
    </div>
  );
}

export default Search;