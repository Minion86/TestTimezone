import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';



const getTimeZone = async (req: Request, res: Response, next: NextFunction) => {
    let latitude=req.params.latitude;
    let longitude=req.params.longitude
    
    let result: AxiosResponse = await axios.get(`http://api.timezonedb.com/v2.1/get-time-zone?key=1CRFWOICH3DF&format=json&by=position&lat=`+latitude+`&lng=`+longitude);
    let data  = result.data;
    return res.status(200).json({
        message: data
    });
};


export default { getTimeZone };


