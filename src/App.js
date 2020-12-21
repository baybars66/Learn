//import React, { Component } from 'react';
import User from './compenents/User';
import Navbar from './compenents/Navbar';
import './App.css';

function App() {

  return (
    <div className="App">
    <Navbar title = 'BAYBİ'/>  
  <hr/>

  <Navbar />  
  <hr/>
    <User
      
      name = 'baybars'
      dep = 'IT'
      salary = '5000'
      
      
      
      />
     
     
     <User
      
      name = 'suela'
      dep = 'IT'
     
      
      
      
      />
     
     
    </div>

  );
}

export default App;
