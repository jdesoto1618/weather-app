import './search.css';

const Search = ({ query, setQuery, search }) => {
  return (
    <div className='conponent-container search-container'>
      <div className='search-box'>
        <input
          type='text'
          className='search-bar'
          placeholder='Search...'
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
    </div>
  );
}

export default Search;