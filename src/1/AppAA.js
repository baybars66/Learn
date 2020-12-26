import React, { Component } from 'react';

import Navbar from './compenents/Navbar';
import Users from './compenents/Users';
import './App.css';

class App extends Component {
  
  state = {
     appkul : [
       {
       id : 1,
       name : "Baybars",
       salary : "5000",
       dep : "Eminönü"

       },

       {
        id : 2,
        name : "Suela",
        salary : "5000",
        dep : "Martaş"
 
        },

        {
          id : 3,
          name : "Yaser",
          salary : "500",
          dep : "Martaş"
   
          },





     ]
  }
  render() {
    return (
    <div className="App">
    <Navbar title = 'BAYBİ'/>  
    <hr/>
    
    <Users kisiler = {this.state.appkul}/>

    <Navbar />  
    <hr/>
    
     
    </div>

    );
      }

     }

export default App;
