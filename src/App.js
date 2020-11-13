//import logo from './logo.svg';
import React from 'react';
import {Route} from 'react-router-dom';
import MultistepForm from './components/MultistepForm';

import './App.css';

function App() {
  return (
     <div>
       <Route path='/' component={MultistepForm}/>
     </div>
    
  );
}

export default App;
