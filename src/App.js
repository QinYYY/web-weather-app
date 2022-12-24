import logo from './logo.svg';
import './App.css';
import Header from './Conponents/Header';
import WeatherCard from './Conponents/WeatherCard';
import React, { useState } from 'react';




function App() {

  const [weatherItems, setweatherItems] = useState([

  ])

  function getWeather(inputCityName, isCurrent) {
    setweatherItems([])
    const appid = 'e8fb8b984ff72dc1c17be3f148222c1f'
    const forcastAppId = 'c6acb30f208926ce19dae8015ecf2d9d'

    if (isCurrent) {

      var url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=' + inputCityName + '&appid=' + appid
      getCurrentWeatherDataWithUrl(url)
    } else {

      var forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?cnt=8&units=metric&q=' + inputCityName + '&appid=' + appid

      getForecateWeatherDataWithUrl(forecastUrl)
    }




  }

  function getForecateWeatherDataWithUrl(forecastUrl) {
    fetch(forecastUrl)
      .then(res => {
        return res.json()
      })
      .then(result => {

        result.list.map(weather => {
          console.log(weather.dt_txt);
          //处理时间

          var time = new Date(weather.dt_txt)
          var day = time.getDate() + '日'
          var hour = time.getHours() + '时'
          console.log(day, hour);
          setweatherItems(items => {
            console.log(weather.main.temp);
            return [...items, {
              name: day + hour,
              country: weather.sys.country,
              temp: weather.main.temp,
              icon: weather.weather[0].icon,
              description: weather.weather[0].description
            }]
          })
        })
      })
      .catch(error => console.log(error))
  }

  function getCurrentWeatherDataWithUrl(url) {
    fetch(url)
      .then(res => res.json())
      .then(result => {
        setweatherItems(item => {
          return [{
            name: result.name,
            country: result.sys.country,
            temp: result.main.temp,
            icon: result.weather[0].icon,
            description: result.weather[0].description
          }]
        })
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="App gradualColor">
      <Header onSubmit={getWeather}></Header>
      <div>

        {weatherItems.map(item => {
          return <WeatherCard item={item}></WeatherCard>
        })}


      </div>

    </div>
  );
}

export default App;
