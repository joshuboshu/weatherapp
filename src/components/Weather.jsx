import React from 'react';

export const Weather = ({ weatherData }) => {
  if (!weatherData.weather) {
    return null;
  }

  return (
    <div className='weather-card w-full max-w-lg p-6 shadow-lg rounded-xl mx-auto my-8 relative'>
      <div className="flex justify-between items-center">
        <div className='w-1/2 flex flex-col items-start'>
          <p className='text-2xl font-semibold'>
            {weatherData.name}, {weatherData.sys.country}
          </p>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            {weatherData.weather[0].description}
          </p>
          <h1 className='text-6xl font-bold mt-2'>
            {weatherData.main.temp.toFixed()} ºC
          </h1>
        </div>
        <div className='w-1/2 flex flex-col items-end'>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
            className='w-[120px] h-[120px]'
          />
          <div className='mt-4 text-gray-800 dark:text-gray-200'>
            <div className="flex justify-between mb-2">
              <p className='font-medium'>Feels Like</p>
              <p className='font-semibold'>{weatherData.main.feels_like.toFixed()} ºC</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className='font-medium'>Humidity</p>
              <p className='font-semibold'>{weatherData.main.humidity} %</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className='font-medium'>Wind Speed</p>
              <p className='font-semibold'>{weatherData.wind.speed.toFixed()}   KPH</p>
            </div>
            <div className="flex justify-between">
              <p className='font-medium'>Pressure</p>
              <p className='font-semibold'>{weatherData.main.pressure}   hPa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
