
import express from 'express';
import controller from '../controllers/info';
const router = express.Router();

router.get('/timezone/:latitude/:longitude', controller.getTimeZone);

export = router;


