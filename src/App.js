import './App.css';
import {useState, useEffect} from 'react'

  function App() {
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);

    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude); 
        }, (error) => {
          alert(error);
        })
      }
      else {
        alert('Your browser does not support geolocation!')
      }
    }, [])

    return (
      <p>
        Position: 
        {lat.toFixed(3)},
        {lng.toFixed(3)}
      </p>
    );
  }

export default App;
