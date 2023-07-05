import './App.css'
import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Weather from './components/Clima'
import Header from './components/Header'
import Location from './components/Location'
 
function App() {

  const [locationReceived, setLocationReceived] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleLocationReceived = (receivedLatitude, receivedLongitude) => {
    setLatitude(receivedLatitude);
    setLongitude(receivedLongitude);
    setLocationReceived(true);
  };

  const [ isLoading, setIsLoading ] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500);
  })

  return (
    <>
      <Header />
      { isLoading && <Loader />}
      <Location onLocationReceived={handleLocationReceived} />
      {locationReceived && <Weather latitude={latitude} longitude={longitude} />}
    </>
  )
}

export default App