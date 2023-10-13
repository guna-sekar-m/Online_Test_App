import {users} from '../models/users.model.js';

const getcabpassengerdetails=async(req,res)=>{
    console.log(req.query)
    try{
       const finduser=await users.findOne({Email:req.query.Email},{ "UserId": 1, "Name":1,"Email": 1,"Mobilenumber": 1,"Gender": 1,_id:0}).lean();
       res.send(finduser);
     
    }
    catch(err){
      console.log(err);
      res.send(err);
    }
}
export {getcabpassengerdetails}