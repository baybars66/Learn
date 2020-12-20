import React, { Component } from 'react';



 class User extends Component {

 state = {
     dene : false
 }


    tikla= (e) => {
       this.setState({
       dene : !this.state.dene

       })
      console.log(this.state.dene)
    }

    render() {
        const {name, dep, salary} = this.props;
        return (
            <div>
            <form>
            <input teyp="text" onClick = {this.tikla} /> 
            <button>Yolla</button>
           <ul>
               { dene ? 
                  <li> İsim: {name}   </li>
               }
           
            <li> Bölüm: {dep}  </li>
            <li> Maaş:  {salary} </li>



           </ul>


            </form>  
            </div>
        )
    }
}

export default User;
