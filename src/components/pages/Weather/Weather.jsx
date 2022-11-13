import React, { useEffect, useState } from 'react'
import { Header } from "../../organisms/Header";
import SearchIcon from '@mui/icons-material/Search';
import countryCodes from '../../../data/CountryCodes.json'
import './Weather.css'

export const Weather = () => {
  const [lat, setLat] = useState()
  const [long, setLong] = useState()
  const [loc, setLoc] = useState('hyderabad')
  const [updatedloc, setUpdatedloc] = useState(loc)
  const [weatherData, setWeatherData] = useState()
  const [ locData, setLocData] = useState()
  const [countryName, setCountryName] = useState('India')

  const handleChange = (event) => {
    setLoc(event.target.value)
    console.log(loc)
  }
  const handleClick = () => {
    setUpdatedloc(loc)
  }
  useEffect(() => {
        const fetchData = async () => {
        if(!lat && !long){
          navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          });
        }
        await fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setWeatherData(result)
          setCountryName(countryCodes[result.sys.country])
          console.log(result)
        });
      }
      fetchData();
  }, [lat, long]);

  useEffect(() => {
    if(loc === ''){
      setLoc('hyderabad')
    }
    const geoLocate = async () => {
        await fetch(`${process.env.REACT_APP_GEOCODING_API_URL}?q=${updatedloc}&key=${process.env.REACT_APP_GEOCODING_API_KEY}`)
        .then(res => res.json())
        .then(result => {
            setLocData(result)
            console.log(result)
        })
    }
    geoLocate()
  }, [updatedloc])

  useEffect(() => {
    if(locData && locData.results.length>0){
      console.log(locData)
      setLat(locData.results[0].geometry.lat)
      setLong(locData.results[0].geometry.lng)
      console.log(lat)
      console.log(long)
    }
  }, [locData])

  return (
    <div className='total-container'>
      <Header />
      <div className='Header'>Welcome to Weather Application</div>

      <div className='search-bar'>
          <input className='search-input' type="text" placeholder='Enter a location' onChange={handleChange}/>
          <SearchIcon className='search-icon' onClick={handleClick} width='maxwidth'/>
      </div>

      <div className='info-container'>
        <div className='weather-data'>
        {(weatherData && weatherData.weather) ?
            <React.Fragment>
                <div className='info-header'>Weather and Country Details</div>
                <div className='bubble one'>Country Code: <div className='data'> {weatherData.sys.country} </div> </div>
                <div className='bubble'>Country Name: <div className='data'> {countryName} </div> </div>
                <div className='bubble two'>Nearest Weather Station: <div className='data'>{weatherData.name}</div></div>
                <div className='bubble three'>Temperature: <div className='data'>{weatherData.main.temp}°C</div></div>
                <div className='bubble four'>Wind Speed: <div className='data'>{weatherData.wind.speed} Knots</div></div>
                <div className='bubble five'>Clouds: <div className='data'>{weatherData.weather[0].description}</div></div>
            </React.Fragment> : null
        }
        </div>
        <div className='location-data'>
        {(locData && locData.results.length>0) &&
            <React.Fragment>
               <div className='info-header'>Location Details</div>
                <div className='bubble one' style={{color: "green"}}>latitude: <div className='data'>{locData.results[0].geometry.lat}</div></div>
                <div className='bubble one' style={{color: "green"}}>longitude: <div className='data'>{locData.results[0].geometry.lng}</div></div>
                <div className='bubble one' style={{color: "green"}}>Timestamp: <div className='data'>{locData.timestamp.created_http}</div></div>
            </React.Fragment>
        }
        </div>
      </div>
    </div>
  )
}

// https://api.opencagedata.com/geocode/v1/json?q=hyderabad&key=b635878927274901ba942426b82bb06d
// https://api.opencagedata.com/geocode/v1/json?q=URI-ENCODED-PLACENAME&key=b635878927274901ba942426b82bb06d