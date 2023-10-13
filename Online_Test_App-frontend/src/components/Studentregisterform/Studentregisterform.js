import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Studentregisterform.css';
import RegisterForm from './RegisterForm';
import { toast } from 'react-hot-toast';
import { apiinittest } from '../../services/apitest/apitest';
import { useAuth } from "../../services/LoginContext/LoginContext";
const Studentregisterform = () => {
  const navigate=useNavigate();
  const [formdata,setformdata]=useState({});
  const {login}=useAuth();

  useEffect(()=>{
    localStorage.clear();
  },[])
  const changeHandler = e => {
    setformdata({...formdata,[e.target.name]:e.target.value});
  }
  const userlogin=async(event)=>{
    event.preventDefault();
    var res=await apiinittest(formdata);
    if(res.token&&res.status=="Init Test"){

      localStorage.setItem("OnlineTestKey",res.token);
      login();
      navigate('/starttest',{state:formdata});
      toast.success("Test Started!")
     

    }
    else if(res.status=="Already test completed"){
      toast.success('Already test completed!', {
        style: {
    
          padding: '16px',
          color: 'black',
        },
        iconTheme: {
          primary: 'blue',
          secondary: 'yellow',
        },
      });

    }
    else{
      toast.error("Try again")
    }
  }
  return(
  <div className="Studentregisterform" data-testid="Studentregisterform">
     <section className="">
     <RegisterForm formdata={formdata} changeHandler={changeHandler} userlogin={userlogin}/>
     </section>

  </div>
 )
};


export default Studentregisterform;
