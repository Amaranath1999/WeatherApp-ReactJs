import axios from 'axios';
import React, {  useState } from 'react'


const Weather = () => {
  const[data,setData]=useState([])
  const[location,setLocation]=useState("")

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ba5c73ed4ef7419e226ed5d1c9b502bc`;
  

   let locationdata=(e)=>{
    setLocation(e.target.value)
   }
   
   let searchLocation=(e)=>{
    if(e.key==='Enter')
    {
      axios.get(url).then(resp=>{setData(resp.data)
      console.log(resp.data);
      })
      
    }
   }
 
  return (
    <div className='app'>
      <div className="search">
        <input type="text"  placeholder='Enter Location' value={location}
        onChange={locationdata}
        onKeyDown={searchLocation}/>
      </div>
      <div className="container">
        <div className="top">
            <div className="location">
               <p>{data.name}</p>
               {data.sys ? <p>{data.sys.country}</p>: null}
               
            </div>
            <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}℉</h1>:null}
            </div>
            <div className="desc">
              {data.main ? <p>{data.weather[0].main}</p>:null}
            </div>
        </div>
        <div className="bottom">
            <div className="feels">
                {data.main ? <p>{data.main.feels_like.toFixed()}℉</p>:null}
                <p>Feels Like</p>
            </div>
            <div className="humidity">
            {data.wind ? <p>{data.main.humidity}%</p>:null}
                <p>Humidity</p>
            </div>
            <div className="wind">
            {data.wind ? <p>{data.wind.speed.toFixed()}MPH</p>:null}
                <p>Wind Speed</p>
            </div>
        </div>


      </div>
    </div>
  )
}

export default Weather
