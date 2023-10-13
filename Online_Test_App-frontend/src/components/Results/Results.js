import React, { useEffect, useState } from 'react';
import  './Results.css';
import { useLocation } from 'react-router-dom';
import Resultview from './Resultview';
const Results = () =>{ 
  const location=useLocation();
  const [result,setResult]=useState(location.state);
  useEffect(()=>{
    localStorage.clear();
  },[])

  return(
  <div className="Results" data-testid="Results">
    <section className="bg-gray-50 dark:bg-gray-900">
      <Resultview result={result}/>
    </section>
  </div>
)};

export default Results;
