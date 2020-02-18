import React, { Component } from 'react';
import './App.css';
import LoginRegister from './LoginRegister'
import { Header } from  'semantic-ui-react'

export default class App extends Component{
  constructor(props){
    super(props)

    this.state = {
        status: 'register',
        loggedInUser: '',
        loggedIn: false
    }
  }


  changeStatus = () => {

    if (this.state.status === 'register') {
      this.setState({
        status: 'login'
      })

    } else {
      this.setState({
        status: 'register'
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
      this.setState({status: 'login'})
    }

    }catch(err){
      console.log(err);
    }
      
  }

  login = async (loginInfo) => {
    try{
      console.log('You made it to login, here is login info', loginInfo);
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

      console.log('Here is the reponse', loginJson);

      if(loginResponse.status === 200){
        this.setState({
          loggedInUser: loginJson.data.username,
          loggedIn: true
        })
      }

    }catch(err){
      console.log(err);
    }
  }

  logout = () => {

  }

  render() {
    console.log(this.state);

  return (
    <Header as='h3' className="App" block>
     {this.state.loggedIn === true ? 
        <nav >
          <li className='logout-nav'>
            Logout
          </li>
        </nav>
        :
        null
      } 
      Welcome to Traval Buuds
      <LoginRegister 
      status={this.state.status}
      register={this.register}
      login={this.login}
      changeStatus={this.changeStatus}
      />

    <div className='main'>
      <div className='d1'></div>
      <div className='d2'></div>
      <div className='d3'></div>
      <div className='d4'></div>
    </div>
    </Header>
 
  );
}
}



