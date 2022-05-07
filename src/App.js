import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App=()=> {

  const[progress,setProgress]=useState(0);

    return (
      <div>
        <Router>
        <LoadingBar
        height={3}
        color='#f11946' 
        progress={progress} 
      />
        <Navbar/>   
   
        {/* <News setprogress={setprogress} setprogress={setprogress} country="in" category="general"/> */}
          <Routes>
            <Route exact path="/" element={<News setprogress={setProgress} key="general" country="in" category="general"/>} />
            <Route exact path="/business" element={<News setprogress={setProgress}  key="business" country="in" category="business"/>} /> 
            <Route exact path="/entertainment" element={<News setprogress={setProgress} key="entertainment" country="in" category="entertainment"/>} /> 
            <Route exact path="/general" element={<News setprogress={setProgress} key="general" country="in" category="general"/>} /> 
            <Route exact path="/health" element={<News setprogress={setProgress} key="health" country="in" category="health"/>} /> 
            <Route exact path="/science" element={<News setprogress={setProgress} key="science" country="in" category="science"/>} /> 
            <Route exact path="/sports" element={<News setprogress={setProgress} key="sports" country="in" category="sports"/>} /> 
            <Route exact path="/technology" element={<News setprogress={setProgress} key="technology" country="in" category="technology"/>} /> 
          </Routes>
        </Router>
      </div>
    )
  
}
export default App