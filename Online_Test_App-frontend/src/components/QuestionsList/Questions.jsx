import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
const Questions=(props)=>{
    const {formRef,formdata,currentQuestionIndex,handleNextClick,changeHandler,selectedOption,selectedoption,handlesubmittest,formattedTime}=props;
    return(
        <div  className="container mx-auto">
              <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                
             
                <div className="max-w-[75rem] w-full bg-white rounded-lg  border text-start  px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto">
                    
                    <div className="p-3 space-y-4 md:space-y-6 sm:p-5">
                        <h1 className="text-center text-lg ">
                          <span class="bg-blue-100 pl-1.5 text-blue-800 text-lg font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                          
                            <div className="flex flex-col lg:flex-row ">
                              <span className="text-sm lg:text-lg">Test Time Remaining:</span>  <span className="text-red-500">  <FontAwesomeIcon icon={faClock} /> {formattedTime}</span>
                              </div>
                            </span>
                        
                        
                         </h1>
                        <p>Question {currentQuestionIndex+1} of {formdata?.length}</p>
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-600 md:text-2x">
                         

                         {formdata[currentQuestionIndex]?.question}
                        </h1>
                        <form ref={formRef} onSubmit={currentQuestionIndex ==formdata.length - 1?handlesubmittest:handleNextClick}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-5">
                            <label htmlFor="hs-radio-in-form1" className="flex p-3  w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                                <input type="radio" name={'Q'+(currentQuestionIndex+1)} checked={selectedOption === formdata[currentQuestionIndex]?.option1}  value={formdata[currentQuestionIndex]&&formdata[currentQuestionIndex].option1 || ''} onChange={(e)=>{changeHandler(e);selectedoption(e)}} className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 " id="hs-radio-in-form1"/>
                                <span className="text-sm text-gray-500 ml-3">{formdata[currentQuestionIndex]?.option1}</span>
                            </label>
                            <label htmlFor="hs-radio-in-form2" className="flex p-3  w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                                <input type="radio" name={'Q'+(currentQuestionIndex+1)} checked={selectedOption === formdata[currentQuestionIndex]?.option2} value={formdata[currentQuestionIndex]?.option2 || ''} onChange={(e)=>{changeHandler(e);selectedoption(e)}} className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 " id="hs-radio-in-form2"/>
                                <span className="text-sm text-gray-500 ml-3">{formdata[currentQuestionIndex]?.option2}</span>
                            </label>
                            <label htmlFor="hs-radio-in-form3" className="flex p-3  w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                                <input type="radio" name={'Q'+(currentQuestionIndex+1)} checked={selectedOption === formdata[currentQuestionIndex]?.option3} value={formdata[currentQuestionIndex]?.option3 || ''} onChange={(e)=>{changeHandler(e);selectedoption(e)}} className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 " id="hs-radio-in-form3"/>
                                <span className="text-sm text-gray-500 ml-3">{formdata[currentQuestionIndex]?.option3}</span>
                            </label>
                            <label htmlFor="hs-radio-in-form4" className="flex p-3  w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                                <input type="radio" name={'Q'+(currentQuestionIndex+1)}  checked={selectedOption === formdata[currentQuestionIndex]?.option4} value={formdata[currentQuestionIndex]?.option4 || ''} onChange={(e)=>{changeHandler(e);selectedoption(e)}} className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 " id="hs-radio-in-form4"/>
                                <span className="text-sm text-gray-500 ml-3">{formdata[currentQuestionIndex]?.option4}</span>
                            </label>
                           

                       
                        </div>
                        <button
                            type="submit"
                            className="py-2 px-3 inline-flex justify-start items-start gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-lg "
                           
                            >
                            {currentQuestionIndex ==formdata.length - 1?'Submit Test':'Next'}
                        </button>
                      </form>
                        
                       
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Questions;