import React, { useState } from "react";
import './WeatherCard.css'
import Badge from 'react-bootstrap/Badge';
export default function WeatherCard(pros) {

  const iconUrl = "http://openweathermap.org/img/wn/" + pros.item.icon + "@2x.png"

  return <div className="WeatherCardContainer">
    <div className="locationDiv infoStyle">
      <label> {pros.item.name} </label><Badge className="countryBg">{pros.item.country}</Badge>
    </div>
    <div className="degreeDiv infoStyle">
      <div className="degreeLabel">{pros.item.temp.toFixed(1)}</div>
      <div className="CLabel">°C</div>
    </div>
    <div className="imgDiv infoStyle">
      <img src={iconUrl}></img>
    </div>
    <div className="descriptionDiv infoStyle">
      {pros.item.description}

    </div>
  </div>

}