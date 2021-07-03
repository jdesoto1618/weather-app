import './temperature.css';

const Temp = () => {
  return (
    <div className='component-container temp-component'>
      <div className='weather-box'>
        <div className='temp'>
          15 degrees C
        </div>
        <div className='weather'>
          Sunny
        </div>
      </div>
    </div>
  );
}

export default Temp;