import axios from "axios"
import { useState, useEffect } from "react"

const Weather = ({latitude, longitude}) => {

  const [ weatherapi, setWeatherapi ] = useState({});
  const [ unit, setUnit ] = useState('celsius');
  
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9e1691fa1b598ce1b79300cbb05085c1`
    axios
    .get(url) 
    .then( resp => setWeatherapi(resp.data) )
    .catch( error => console.error(error) )
  }, []);

  function temp() {
    let c = weatherapi.main?.temp - 273.15;
    let stc = weatherapi.main?.feels_like - 273.15;

    if (unit === 'fahrenheit') {
      c = 1.8 * (weatherapi.main?.temp - 273) + 32;
      stc = 1.8 * (weatherapi.main?.feels_like - 273) + 32;
    }

    return {
      c: Math.round(c),
      stc: Math.round(stc)
    };
  };

  const toggleUnit = () => {
    setUnit(unit === 'celsius' ? 'fahrenheit' : 'celsius');
  };

  function Km() {
    const kilometer = weatherapi.wind?.speed * 3.6;
    return {
      kilometer: Math.round(kilometer)
    }
  }

  const { c, stc } = temp();
  const { kilometer } = Km();
  const icon = weatherapi.weather && weatherapi.weather[0] && weatherapi.weather[0].icon
  const alt = weatherapi.weather && weatherapi.weather[0] && weatherapi.weather[0].description
  

  return (
    <section>
      <article className="container">
        <p className="title"> {c}°{unit === 'celsius' ? 'C' : 'F'} </p>
        <p className="description">Sensacion de: {stc}°{unit === 'celsius' ? 'C' : 'F'} </p>
        <p className="description">Viento: {kilometer} km/h</p>
        <p className="description">Nubes: {weatherapi.clouds?.all}%</p>
        <p className="description">Presion: {weatherapi.main?.pressure} mbar</p>
        <p className="city_names">{weatherapi.name}, {weatherapi.sys?.country}</p>
        <img src={`/${icon}.svg`} alt={alt} className="icon_weather"/>
        <p className="icon_description">{weatherapi.weather && weatherapi.weather[0] && weatherapi.weather[0].description}</p>
      </article>
      <article>
        <button className="buttonf_c" onClick={toggleUnit}>Cambiar a °F</button>
      </article>
    </section>
  )
}

export default Weather