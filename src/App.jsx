import { useState } from 'react'
import Axios from 'axios';
import { Weather } from './components/Weather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const API_KEY = ``; // Agrega la api key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      Axios.get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
      setLocation("");
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <button
        onClick={toggleDarkMode}
        className="dark-mode-button"
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="lg" />
      </button>
      <header className='mb-8'>
        <h1 className='text-4xl font-extrabold text-center mb-4 sm:text-3xl'>
          Weather App
        </h1>
      </header>
      <div className='w-full h-full flex flex-col items-center justify-center p-4'>
        <input
          type='text'
          className='py-3 px-6 w-full max-w-md text-lg rounded-3xl border border-gray-300 dark:border-gray-600 text-gray-800 placeholder:text-gray-400 dark:text-gray-200 bg-white dark:bg-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-300 transition-colors'
          placeholder='Enter location'
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
        />
        <Weather weatherData={data} />
      </div>
    </div>
  );
}

export default App;