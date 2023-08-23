import { Button } from 'react-bootstrap'
import React, { Component } from 'react'

class Home extends Component {
     render() {
          return (
               <div>
                 <h1> Home Page </h1>  
                 <Button variant="warning">Warning</Button> 
                 <Button variant="info"><i className="fa fa-home"></i></Button> 
               </div>
          )
     }
}

export default Home