import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Cloud, CloudRain, Wind, Droplets } from 'lucide-react'

function WeatherWidget() {
  const [weather, setWeather] = useState({
    temp: 28,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    forecast: [
      { day: 'Tomorrow', high: 32, low: 22, icon: '☀️' },
      { day: 'Wednesday', high: 30, low: 20, icon: '⛅' },
      { day: 'Thursday', high: 25, low: 18, icon: '🌧️' }
    ]
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-lg p-6 shadow-lg"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">7-Day Weather</h3>
        <Cloud size={24} />
      </div>

      <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
        <p className="text-4xl font-bold">{weather.temp}°C</p>
        <p className="text-blue-100 mt-1">{weather.condition}</p>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex items-center gap-2">
            <Droplets size={20} />
            <div>
              <p className="text-xs text-blue-100">Humidity</p>
              <p className="font-semibold">{weather.humidity}%</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Wind size={20} />
            <div>
              <p className="text-xs text-blue-100">Wind Speed</p>
              <p className="font-semibold">{weather.windSpeed} km/h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {weather.forecast.map((day, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3"
          >
            <div className="flex items-center gap-2 flex-1">
              <span className="text-2xl">{day.icon}</span>
              <p className="text-sm">{day.day}</p>
            </div>
            <p className="text-sm">
              {day.high}° / {day.low}°
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 bg-yellow-400 bg-opacity-20 rounded-lg p-3 text-sm">
        <p className="font-semibold">⚠️ Alert:</p>
        <p className="text-xs mt-1">Rain expected on Thursday. Plan irrigation accordingly.</p>
      </div>
    </motion.div>
  )
}

export default WeatherWidget
