import React, { Component } from 'react'
import User from './User';

 class Users extends Component {
    render() {
        const {kisiler} = this.props;
       // console.log (users);
        return (
            <div>
              {
                kisiler.map( kisi => {
                    return (
                        <User
                          key = {kisi.id} // çok önemli uniq key hatası için 
                          name = { kisi.name}
                          salary = {kisi.salary}
                          dep = {kisi.dep}
                          />

                    )



                })
            }
            </div>
        )
    }
    
}


export default Users;