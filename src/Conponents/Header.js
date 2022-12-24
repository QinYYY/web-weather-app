
import React, { useState } from "react";
import './Header.css'
import Form from 'react-bootstrap/Form';

export default function Header(pros) {

  const [inputText, setinputText] = useState('')

  function CurrentWeather() {
    pros.onSubmit(inputText, true)
  }
  function HourlyWeather() {
    pros.onSubmit(inputText, false)
  }
  function handleChange(e) {
    const inputCityName = e.target.value

    setinputText(inputCityName)

  }

  return <div className="headerDiv">
    <h1>Weather App</h1>

    <div className="inputDiv">
      <input placeholder="Search for a City" onChange={handleChange} value={inputText}></input>
      <button onClick={CurrentWeather}>Current</button>
      <button onClick={HourlyWeather}>Hourly</button>
    </div>

  </div>

}