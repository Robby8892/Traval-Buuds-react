import React, { Component } from 'react';
import './App.css';
import LoginRegister from './LoginRegister'
import { Header } from  'semantic-ui-react'

export default class App extends Component{
  constructor(props){
    super(props)

    this.state = {
        status: 'register'
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
    console.log('You made it to register func, here is the reg info', registerInfo );
    const url = process.env.REACT_APP_API_URL + '/api/v1/users/register' 

    const registerResponse = await fetch(url, {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(registerInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log('registerInfo response', registerResponse);

    const registerJson = await registerResponse.json()

    console.log(registerJson);

    }catch(err){
      console.log(err);
    }
      
  }
  render() {


  return (
    <Header as='h3' className="App" block>
      Welcome to Traval Buuds
      <LoginRegister 
      status={this.state.status}
      register={this.register}
      changeStatus={this.changeStatus}
      />
      <br/>
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



