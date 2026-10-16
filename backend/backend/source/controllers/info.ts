import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

const getTimeZone = async (req: Request, res: Response, next: NextFunction) => {
    const latitude = Number(req.params.latitude);
    const longitude = Number(req.params.longitude);
    if (!Number.isFinite(latitude) || !Number.isFinite(longitude) || latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
        return res.status(400).json({ message: 'Invalid coordinates' });
    }
    const key = process.env.TIMEZONEDB_API_KEY;
    if (!key) {
        return res.status(503).json({ message: 'Time zone service is not configured' });
    }
    try {
        const result = await axios.get('https://api.timezonedb.com/v2.1/get-time-zone', {
            params: { key, format: 'json', by: 'position', lat: latitude, lng: longitude },
            timeout: 10000,
            maxRedirects: 0,
        });
        return res.status(200).json({ message: result.data });
    } catch {
        return res.status(502).json({ message: 'Time zone service is unavailable' });
    }
};

export default { getTimeZone };
