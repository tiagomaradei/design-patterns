import CurrentConditionsDisplay from './observers/CurrentConditionsDisplay';
import ForecastDisplay from './observers/ForecastDisplay';
import HeatIndexDisplay from './observers/HeatIndexDisplay';
import StatisticsDisplay from './observers/StatisticsDisplay';
import WeaterData from './WeatherData';

const weaterData = new WeaterData();
const currentConditionsDisplay = new CurrentConditionsDisplay(weaterData);
const statistcsDisplay = new StatisticsDisplay(weaterData);
const forecastDisplay = new ForecastDisplay(weaterData);
const heatIndexDisplay = new HeatIndexDisplay(weaterData);

weaterData.setMeasurements(80, 65, 30.4);
console.log('---------------------------');
weaterData.setMeasurements(82, 70, 29.2);
console.log('---------------------------');
weaterData.setMeasurements(78, 90, 29.2);
