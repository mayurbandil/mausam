import React, { useEffect, useState } from "react";
import "./css/style.css";
const Tempapp = () =>{
    const [city, setcity] = useState(null);
    const[search, setSearch] = useState("Mumbai"); 

    useEffect(()=>{
      const fetchApi=async()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ed075977f63e918dc1e0ce6eb1a9eea1&units=metric`;
        const response = await fetch(url);
        const resjson = await response.json();
        // console.log(resjson);
        setcity(resjson.main);
      }
      fetchApi();
    },[search])
    return (
      <>
        <div className="box">
        <h1 className="Heading">Mausam</h1>
          <div className="inputData">
            <input
              type="search"
              className="inputFeild"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          {!city ? (
            <p className="errorMsg">No data found</p>
          ) : (
            <div>
              <div className="info">
                <h2 className="location">
                  <i className="fas fa-street-view"></i>
                  {search}
                </h2>
                <h1 className="temp">{city.temp}°C</h1>
                <h3 className="tempmin_max">
                  {city.temp_min}°C to {city.temp_max}°C
                </h3>
              </div>

              <div className="wave -one"></div>
              <div className="wave -two"></div>
              <div className="wave -three"></div>
            </div>
          )}
        </div>
      </>
    );
}   
export default Tempapp;