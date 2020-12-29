import React, { Component } from 'react'

class Test extends Component {
    constructor(props){
     super(props);

     
     this.state = {
        a: 10

     };
     console.log("contruction");
     console.log(this.state);
}

 componentDidMount() {
    console.log("compDidmount");
  //API istekleri için kullanılır
  this.setState ({
      a : 20
  });



 }
 
componentDidUpdate(prevProps, prevState) {
    console.log("update");

}

 shouldComponentUpdate(){
     console.log('should comp up');
     return  true;
 }

    render() {
        console.log("render");
        return (
            <div>
                
            </div>
        )
    }
}

export default Test;
