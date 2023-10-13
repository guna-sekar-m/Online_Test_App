import React from "react";

const Resultview=(props)=>{
    const {result}=props;
    return(
     <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
       
          <div className="max-w-[75rem] w-full bg-white rounded-lg shadow  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
             <div className="grid sm:grid-cols-1 gap-2 mb-5">

                <h1 className="text-3xl text-blue-900 font-bold">Thank you for participating in our quiz</h1>
    
                <h1 className="text-large font-medium text-start">Student Name: {result.Student_Name}</h1>
                <h1 className="text-large font-medium text-start">Student Register Number: {result.Student_Register_Number}</h1>
                <h1 className="text-large font-medium text-green-500 text-start">Correct Answer Count: {result.CorrectAnswerCount}</h1>
                <h1 className="text-large font-medium text-red-500 text-start">Wrong Answer Count: {result.WrongAnswerCount}</h1>
                    
            </div>
          </div>
        </div>
    </div>

    )
}
export default Resultview;