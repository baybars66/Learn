import React, { Component } from 'react'
import Talep from './context';
import posed from 'react-pose';
var uniqid = require('uniqid');



const Anime = posed.div({
    visible: {
        opacity: 1,
        applyAtStart : {
            display : "block"
        }
    },

    hidden: {

        opacity: 0,
        applyAtEnd : {
            display : "none"
        }
    }


});


 class AddKul extends Component {

    state={
        visible : false,
        name :"",
        dep :"",
        salary :"",

    }

    ackapa = (e) => {
        this.setState({
            visible: ! this.state.visible
    
        })
    
     }
    

verideg = (e) => {
 this.setState({
    [e.target.name] : e.target.value
    
 })
}
  KulEkle = (dispatch,e) => {
   e.preventDefault(); //submit sonrası sayfanın refresini engeller
  // console.log("test");
  const { name, salary,dep} = this.state;
  const newkul = {
    id:uniqid(),
    name,
    salary,
    dep

  }

  dispatch({type: "BirKulEkle", payload: newkul});
 console.log(newkul);
 }


// namedeg = (e) => {
// this.setState({
//     name : e.target.value
// })
// }

// depdeg = (e) => {
//     this.setState({
//         dep : e.target.value
//     })
// }

// salarydeg = (e) => {
//     this.setState({
//         salary : e.target.value
//     })
// }

    render() {
        const {visible, name,salary, dep} = this.state;
        return(
            <Talep>
                {
                    value => {
                        const {dispatch} = value;
        
              return (
                <div className="col-md-8 mb-3">
                <button onClick= {this.ackapa} className="btn btn-dark btn-block mb-2">{visible ? "Close" : "Add User"}</button>
                <Anime pose = {visible ? "visible" : "hidden"}>
                
                <div className="card">
                    <div className="card-header">
                <h4>Add User Form</h4>
                </div>
                <div className="card-body">

                    <form onSubmit = {this.KulEkle.bind(this, dispatc)}>

                    <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text"
                    name="name"
                    id="id"
                    placeholder="Enter Name"
                    className = "form-control"
                    value = {name}
                    onChange = {this.verideg}
                    />


                    </div>

                    <div className="form-group">
                    <label htmlFor="dep">Department</label>
                    <input 
                    type="text"
                    name="dep"
                    id="dep"
                    placeholder="Enter Department"
                    className = "form-control"
                    value = {dep}
                    onChange = {this.verideg}
                    />

                    </div>

                    <div className="form-group">
                    <label htmlFor="salary">Salary</label>
                    <input 
                    type="text"
                    name="salary"
                    id="salary"
                    placeholder="Enter Salary"
                    className = "form-control"
                    value = {salary}
                    onChange = {this.verideg}
                    />


                    </div>


                   <button className="btn btn-default btn-block" type="submit">Add User</button>

                    </form>
                </div>
                </div>
                </Anime>
            </div>
        )
    }
}
</Talep>



)




}

}

export default AddKul;
