import express from 'express';
var router = express.Router();

import  {getCurrentWeatherByCity,getForecastWeatherByCity,getHistoricalDataWeatherByCity} from '../controllers/weathercontroller.js';
router.get('/',(req,res) => {res.send('I am Weather')})
router.get('/current',getCurrentWeatherByCity);
router.get('/forcast',getForecastWeatherByCity);
router.get('/history',getHistoricalDataWeatherByCity);

export default router;



