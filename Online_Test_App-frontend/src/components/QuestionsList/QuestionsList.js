import React,{useState,useEffect,useRef} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import './QuestionsList.css';
import { toast } from 'react-hot-toast';
import { apigetquestions,apisavetest } from '../../services/apitest/apitest';
import { removetoken,getuserdetails } from '../../services/Token/token';
import Questions from './Questions';
const QuestionsList = () =>{ 
  const navigate=useNavigate();
  const location=useLocation();
  const [formdata,setformdata]=useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [Answers,setAnswers]=useState({});
  const [timer, setTimer] = useState(900); // 15 minutes in seconds 900
  const [formattedTime, setFormattedTime] = useState('00:15:00');


  const formRef = useRef(null);
  let isMounted=true;
  useEffect(() => {
    const handleBackButton = (e) => {
      // Prevent the default behavior of the back button
      e.preventDefault();

      // Optionally, you can display a message to the user
      // to inform them that back navigation is disabled
      alert('Back navigation is disabled in this application.');
    };

    // Listen for the popstate event (triggered by the back button)
    window.addEventListener('popstate', handleBackButton);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);
  useEffect(() => {
    // Disable context menu
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable F12 key (key code 123)
    const handleKeyPress = (e) => {
      if (e.which === 123) {
        e.preventDefault();
      }
    };

    // Add event listeners when the component mounts
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyPress);

    // Remove event listeners when the component unmounts
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  useEffect(() => {
    if (isMounted) {
    // Check if there are stored answers and a stored current question index
    const storedAnswers = localStorage.getItem('userAnswers');
    const storedCurrentIndex = localStorage.getItem('currentQuestionIndex');
    const storedTimer = localStorage.getItem('timer');
    if (storedAnswers && storedCurrentIndex) {
      setAnswers(JSON.parse(storedAnswers));
      setCurrentQuestionIndex(parseInt(storedCurrentIndex));
      setTimer(parseInt(storedTimer));
    }
  }
  return () => {
    isMounted = false;
  };
  }, []);
  
  useEffect(() => {
    // Save user answers and current question index to local storage
    localStorage.setItem('userAnswers', JSON.stringify(Answers));
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
    localStorage.setItem('timer', timer.toString());
  }, [Answers, currentQuestionIndex,timer]);
  useEffect(()=>{
 
    if (isMounted&& JSON.parse(localStorage.getItem('getquestionsonetime'))!=true) {
      getquestions();
    }
    else if(isMounted){
      setformdata(location.state.data)
    }
    return () => {
      isMounted = false;
    };
  },[]);
  
  useEffect(() => {
    let timerInterval;

    if (timer === 0) {
      if (formRef.current) {
        handleautosubmittest();
      }
    } else {
      timerInterval = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer <= 0) {
            clearInterval(timerInterval);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [timer]);

  useEffect(() => {
    // Convert timer value to HH:MM:SS format
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    setFormattedTime(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
  }, [timer]);



  const changeHandler = e => {
   
    setAnswers({...Answers,[e.target.name]:[{Selected_Answer:e.target.value,Question:formdata[currentQuestionIndex]?.question}]});

  }
  const selectedoption=e=>{

    setSelectedOption(e.target.value);
  }

  const getquestions=async()=>{
    
    var res=await apigetquestions(formdata);
    setformdata(res);
    navigate('/starttest',{state:{data:res,users:location.state}})
    localStorage.setItem('getquestionsonetime', JSON.stringify(true));
  
  }
  const handleNextClick = (event) => {
    event.preventDefault();
    if (currentQuestionIndex < formdata?.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
   
      alert("End of Quiz. You can submit your answers here.");
    }
  };
  const handleautosubmittest= async() => {
  
    var res=await apisavetest({...getuserdetails(),Results:[Answers],Remaining_Time:formattedTime});
    if(res.status=="Test completed"){
      localStorage.clear();
      navigate('/results',{state:res.data})
      
    }
    else{
      toast.error("Try again later");
    }
    
  }
 
  const handlesubmittest= async(event) => {
    event.preventDefault();
    console.log(getuserdetails())
    var res=await apisavetest({...getuserdetails(),Results:[Answers],Remaining_Time:formattedTime});
    if(res.status=="Test completed"){
      removetoken();
      navigate('/results',{state:res.data})
      
    }
    else{
      toast.error("Try again later");
    }
    
  }
  return(
  <div className="QuestionsList" data-testid="QuestionsList">
    <section className="bg-gray-50 dark:bg-gray-900">
     <Questions formRef={formRef} formdata={formdata} currentQuestionIndex={currentQuestionIndex} handleNextClick={handleNextClick} changeHandler={changeHandler} 
     selectedOption={selectedOption} selectedoption={selectedoption} handlesubmittest={handlesubmittest} formattedTime={formattedTime}/>
     </section>
  </div>
)};

export default QuestionsList;
