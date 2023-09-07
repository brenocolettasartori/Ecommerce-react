import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav'
import Footer from '../components/common/Footer'
import Profile from '../components/common/Profile'

class ProfilePage extends Component {

     componentDidMount(){
          window.scroll(0,0)
     }

     render() {

        const User = this.props.user;
        
          return (
            <Fragment> 
                <Nav/>                    
                <Profile user = {User} />  
                <Footer/>
          </Fragment>
          )
     }
}

export default ProfilePage