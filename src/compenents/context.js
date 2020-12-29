import React, { Component } from 'react'

const Contextim = React.createContext();

const reducer = (state, action) => {
 switch (action.type){
   case "sil" : 
     // console.log('burada')
       return{
           ...state,
           kisiler: state.kisiler.filter( kisi=> action.payload !== kisi.id)
         
       }

       case "BirKulEkle":
           return{
            ...state,
            //kisiler: state.kisiler.push(action.payload) //array olduğu için burada yemez
           kisiler: [...state.kisiler,action.payload]


           }
       default: //console.log('değil')
           return state
 }

}


export class Arz extends Component {
    
    state = {
        kisiler : [
          {
          id : 1,
          name : "Baybars",
          salary : "5000",
          dep : "Eminönü"
   
          },
   
          {
           id : 2,
           name : "Suela",
           //salary : "5000",
           dep : "Martaş"
    
           },
   
           {
             id : 3,
             name : "Yaser",
             salary : "500",
             dep : "Martaş"
      
             },
 
        ],
         dispatch : action => {
                this.setState(state => reducer(state, action))


         }


     }
    
    render() {
        return (
            <Contextim.Provider value = {this.state}>
               {this.props.children} 

            </Contextim.Provider>
        )
    }
}
 
const Talep = Contextim.Consumer;
export default Talep;