
import './App.css';
import { useState } from 'react';

function App() {
  const [city,setCity]=useState('');
  const [weather,setWeather]=useState(null);
  function getWeather(){
    const APIkey='7d528f36bb5f14fc2bf029d779439d9d';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
   fetch(url)
   .then((response)=>response.json())
   .then((data)=>{
   // console.log(data);
   let MT=Math.round(data.main.temp);
   let FL=Math.round(data.main.feels_like);
   const weather={
    location:`weather in ${data.name}`,
    temperature:`Temperature: ${MT} C`,
    feelslike:`Feels Like: ${FL} C`,
    humidity:`Humidity ${data.main.humidity} %`,
    wind: `Wind: ${data.wind.speed} Km/h`,
    condition:`Weather condition:${data.weather[0].description}`
   };
   setWeather(weather);
   })
  }
  return (
    
    <div className="weather-conatainer">
      <input 
      type='text'
      placeholder='Enter city name'
      value={city}
      onChange={(e)=>setCity(e.target.value)}/>
        <button  className='btn'onClick={getWeather}>Get Weather</button> 
        {weather && (
          <div className='weather'>
          <h3>{weather.location}</h3>
          <p>{weather.temperature}</p>
          <p>{weather.humidity}</p>
         <p>{weather.feelslike}</p>
          <p>{weather.wind}</p>
          <p>{weather.condition}</p>
          </div>
          
        )}

        
    </div>
  );
}

export default App;
