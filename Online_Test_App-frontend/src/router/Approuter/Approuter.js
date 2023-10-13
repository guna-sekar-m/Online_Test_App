import React,{lazy,Suspense} from 'react';
import { Navigate,HashRouter } from 'react-router-dom';
import { BrowserRouter as Router,} from "react-router-dom";
import { Routes, Route } from "react-router-loading";
import ScrollToTop from './ScrollToTop';
import { Provider } from 'react-redux';
import {LoginProvider}  from "../../services/LoginContext/LoginContext";
import AuthLogin from '../../services/LoginContext/Login';
import AuthGuard from '../../services/AuthGuard/AuthGuard';
//components
const Studentregisterform=lazy(() => import('../../components/Studentregisterform/Studentregisterform'));
const QuestionsList=lazy(() => import('../../components/QuestionsList/QuestionsList'));
const Results=lazy(() => import('../../components/Results/Results'));

const Approuter = () => (
  <div data-testid="Approuter">
    <Provider store={AuthLogin}>
    <HashRouter>
      <ScrollToTop />
      <Routes  maxLoadingTime={500}>
         <Route path="/register" element={<Suspense fallback={<>...</>}><LoginProvider><Studentregisterform /></LoginProvider></Suspense>} loading/>
         <Route path="/starttest" element={<Suspense fallback={<>...</>}><LoginProvider><AuthGuard ><QuestionsList /></AuthGuard></LoginProvider></Suspense>} loading/>
         <Route path="/results" element={<Suspense fallback={<>...</>}><Results /></Suspense>} loading/>
         <Route path="/" element={<Navigate to="/register" replace/>} />
      </Routes>
   </HashRouter>
   </Provider>
  </div>
);
export default Approuter;
