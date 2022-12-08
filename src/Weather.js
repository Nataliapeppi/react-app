import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The wearther in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )} °C`
    );
  }
  let apiKey = "2c975c993eaf1e67699dced574209890";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return <h2>Hello from Weather</h2>;
}
