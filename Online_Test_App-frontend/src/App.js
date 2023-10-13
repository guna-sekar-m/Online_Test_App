
import './App.css';
import Approuter from './router/Approuter/Approuter';
import { Toaster } from 'react-hot-toast';
import CookieConsentComponent from './CookieConsent';

function App() {
  return (
    <div className="App bg-gray-50">
           <Toaster position="top-center" reverseOrder={false}/>
          <Approuter/>
          <CookieConsentComponent />
    </div>
  );
}

export default App;
