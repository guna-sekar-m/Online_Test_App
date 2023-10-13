import {createConnection } from 'mongoose';
var con1=createConnection('mongodb://0.0.0.0:27017/Onlinetestapp',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  function (err, db) {
    console.log("Onlinetestapp Database Connected successful");
  }
);
export default con1;