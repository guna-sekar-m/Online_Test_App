import { Router } from 'express';
import { getquestions,inittest,savetest, gettestresults} from '../controllers/tests.controller.js';
var apirouter = Router();

apirouter.post('/apiinittest',inittest);
apirouter.get('/apigetquestions',getquestions);
apirouter.post('/apisavetest',savetest);
apirouter.get('/gettestresults',gettestresults)
export default apirouter;
