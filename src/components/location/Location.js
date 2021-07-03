import './location.css'

const Location = () => {
  const dateBuilder = (date) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[date.getDay()];
    let theDate = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    return `${day} ${theDate} ${month} ${year}`;
  }

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