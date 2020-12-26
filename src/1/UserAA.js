import React, { Component } from 'react';
import PropTypes from 'prop-types';

 class User extends Component {

  state = {
        isvisible : true
        }

/*
  constructor(props){
     super(props);
    
     this.state = {
       isvisible: false

     }
  }
  
*/

   tikla = (e) => {
    
      this.setState({
      isvisible : ! this.state.isvisible
       });
    console.log(e.target);
    console.log("baybars");
   }

    render() {
        const {name, dep, salary} = this.props;
        const {isvisible} = this.state;

        return (
            <div>
            <form>
            <input teyp="text" onClick = {this.tikla} /> 
            <button>Yolla</button>
           
           
            {isvisible ?
           
           <ul>
            <li> İsim: {name}   </li>
            
            <li>  Bölüm: {dep}  </li>
            <li> Maaş:  {salary} </li>
            <li>  {this.state.Test} </li>



           </ul>
            : null
            }
            </form>  
            </div>
        )
    }
}

User.propTypes = {
    name : PropTypes.string.isRequired,
    dep : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired
}

User.defaultProps ={
    name :"BİLGİ YOK",
    dep :"BİLGİ YOK",
    salary : "BİLGİ YOK"
}


export default User;
