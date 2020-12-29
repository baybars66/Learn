import React, { Component } from 'react'

import Navbar from './compenents/Navbar';
import Users from './compenents/Users';
import './App.css';
import AddKul from './compenents/AddKul';
import Test from './compenents/Test';
import Dene from './compenents/Dene'

class App extends Component {
  
  
  render() {
    return (
    <div className="container">
     <Test test= "deneme" />
      <Dene />
    <Navbar title = 'BAYBİ'/>  
    <hr/>
    <AddKul />
    <Users />

    <Navbar />  
    <hr/>
    
     
    </div>

    );
      }

     }

export default App;
