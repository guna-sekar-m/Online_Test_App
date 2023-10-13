import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
const RegisterForm=(props)=>{
const {formdata,changeHandler,userlogin}=props;

 return(
    <div className="container mx-auto">
     <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
       
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-4 sm:p-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-indigo-600 md:text-4xl ">
              TECHNICAL QUIZ


              </h1>
             

             

              <form className="space-y-4 md:space-y-6" onSubmit={userlogin}>
                  <div className="">
                      <input type="text" id="Email" className="bg-gray-50 border  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" placeholder="Enter Your Register Number" name="Student_Register_Number"   value={formdata.Student_Register_Number || ""} onChange={changeHandler} required/>
                  </div>
               
                 <div className="">
                      <input type="text" id="Email" className="bg-gray-50 border  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" placeholder="Enter Your Name" name="Student_Name" value={formdata.Student_Name || ""} onChange={changeHandler} required/>
                  </div>
                  <div className="">
                      <input type="text" id="Email" className="bg-gray-50 border  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" placeholder="Enter Your Department / Year" name="Student_Department" value={formdata.Student_Department || ""} onChange={changeHandler} required/>
                  </div>
                  <div className="">
                      <input type="email" id="Email" className="bg-gray-50 border  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" placeholder="Enter Your Email" name="Student_Email" value={formdata.Student_Email || ""} onChange={changeHandler} required/>
                  </div>
                  <div className="">
                      <input type="text" id="Email" className="bg-gray-50 border  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" placeholder="Enter Your Mobile Number" name="Student_Mobile_Number" value={formdata.Student_Mobile_Number || ""} onChange={changeHandler} required/>
                  </div>
                
                  <button type="submit" className="w-full bg-green-500 text-white hover:bg-indigo-600  p-2.5 rounded-lg">
                 
                  <FontAwesomeIcon icon={faPlay} /> Start Test</button>
                 
              </form>
          </div>
      </div>
  </div>
    </div>
 )
}
export default RegisterForm;