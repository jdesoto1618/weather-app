import './location.css'

const Location = () => {
  return (
    <div className='component-container location-container'>
      <div className='location-box'>
        <div className='location'>New York City</div>
        <div className='date'>{dateBuilder(new Date())}</div>
      </div>
    </div>
  );
}

export default Location