import {getCurrentWeatherByCityService,getForecastWeatherByCityService,getHistoricalDataWeatherByCityService}   from '../service/weatherservice.js';

const getCurrentWeatherByCity = async(req,res,next) => {
    let city = req.query.city
    if (!city){
        next({statusCode:400,message:'Please provide valid city name'})
    }
    try {
        let response = await getCurrentWeatherByCityService(city);
        res.json({statusCode:200,data:response});
    }catch(e){
        next({statusCode:500,message:'Something Went Wrong '});
    }
}

const getForecastWeatherByCity = async(req,res,next) => {
    if(!req.query.city){
        next({statusCode:400,message:'please provide the valid city name'});
    }
    if (!req.query.days){
        next({statusCode:400, message:'please provide the valid number of days'});
    }
    if (req.query.days <1 || req.query.days >10){
        next({statusCode:400 , message:'please valid no of days between 1~10'});
    }
    try{
        let response = await getForecastWeatherByCityService(req.query.city,req.query.days);
        res.json({statusCode:200,data:response});

    }catch(e){
        next({statusCode:500,message:'Oops, Something Went Wrong!'})
    }
}


const getHistoricalDataWeatherByCity = async (req,res,next) => {
    if(!req.query.city){
        next({statusCode:400,message:'Please provide valid City name'});
    }
    if (!req.query.date){
        next({statusCode:400,message:'Please Provide a valid Date'});
    }
    try{
        let response = await getHistoricalDataWeatherByCityService(req.query.city,req.query.date);
        res.json({statusCode:200,data:response})
    }catch(e){
        next({statusCode:500,message:"Oops,Something went wrong!"})
    }
}

export {getCurrentWeatherByCity,getForecastWeatherByCity,getHistoricalDataWeatherByCity};