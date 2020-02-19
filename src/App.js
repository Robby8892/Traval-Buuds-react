import React, { Component } from 'react';
import './App.css';
import LoginRegister from './LoginRegister'
import PostContainer from './PostContainer'
import AnimatedBackgroundContainer from './AnimatedBackgroundContainer'
import { Header } from  'semantic-ui-react'

export default class App extends Component{
  constructor(props){
    super(props)

    this.state = {
        status: 'register',
        loggedInUser: '',
        loggedIn: false,
        idOfLoggedInUser: '',
        message: ''
    }
  }


  changeStatus = () => {

    if (this.state.status === 'register') {
      this.setState({
        status: 'login',
        message: ''
      })

    } else {
      this.setState({
        status: 'register', 
        message: ''
      })
    }
  }

  register = async (registerInfo) => {
    
    try {
    const url = process.env.REACT_APP_API_URL + '/api/v1/users/register' 

    const registerResponse = await fetch(url, {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(registerInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const registerJson = await registerResponse.json()

    if(registerResponse.status === 201){
      this.setState({status: 'login', message: ''})
    }

    else {
      this.setState({message: 'A users with that email already exists'})
    } 

    }catch(err){
      console.log(err);
    }
      
  }

  login = async (loginInfo) => {
    try{
      const url = process.env.REACT_APP_API_URL + '/api/v1/users/login' 

      const loginResponse = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(loginInfo),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const loginJson = await loginResponse.json()

      if(loginResponse.status === 200){
        this.setState({
          loggedInUser: loginJson.data.username,
          idOfLoggedInUser: loginJson.data.id,
          loggedIn: true,
          message: ''
        })
      } else {
          this.setState({message: 'Username or password is invalid'})
      }

    }catch(err){
      console.log(err);
    }
  }

  logout = async () => {
    const url = process.env.REACT_APP_API_URL + '/api/v1/users/logout'

    const logoutResponse = await fetch(url, {
      method: 'GET'
    })

    const logoutJson = await logoutResponse.json()

    if(logoutResponse.status === 200){
      this.setState({
        status: 'register',
        loggedInUser: '',
        loggedIn: false
      })
    }
  }

  render() {

  return (
    <Header as='h3' className="App" block>
     {this.state.loggedIn === true ?

        <nav>
        <li className='logged-in-as'>Logged in as {this.state.loggedInUser.toUpperCase()}</li>
          <li onClick={this.logout} className='logout-nav'>
            Logout
          </li>
        </nav>
        :
        <div>
        Welcome to Traval Buuds
        <br/>
        <small className='message'>{this.state.message}</small>
        </div>
      } 
      
      {this.state.loggedIn === false ?
      <LoginRegister 
      status={this.state.status}
      register={this.register}
      login={this.login}
      changeStatus={this.changeStatus}
      />
      :
      <PostContainer
      idOfUser={this.state.idOfLoggedInUser}
      />
      }
      {this.state.loggedIn === false ?
        <AnimatedBackgroundContainer/>
        :
        null
      }
    </Header>
 
  );
}
}



