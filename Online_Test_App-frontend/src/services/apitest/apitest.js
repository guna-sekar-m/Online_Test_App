import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";

const apiinittest=async(data)=>{
    var res=await axios.post(`${apiurl()}/api/apiinittest`,data);
    return res.data;
 }
 
const apigetquestions=async()=>{
    var res=await axios.get(`${apiurl()}/api/apigetquestions`);
    return res.data;
 }
 
 const apisavetest=async(data)=>{
    var res=await axios.post(`${apiurl()}/api/apisavetest`,data);
    return res.data;
 }
 
export {apiinittest,apigetquestions,apisavetest};