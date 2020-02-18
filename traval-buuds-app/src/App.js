import React, { Component } from 'react';
import './App.css';
import LoginRegister from './LoginRegister'
import { Header } from  'semantic-ui-react'

export default class App extends Component{
  constructor(){
    super()

    this.state = {
        status: 'register'
    }
  }

  register = (registerInfo) => {
    console.log('You made it to register func, here is the reg info', registerInfo );
  }
  render() {


  return (
    <Header as='h3' className="App" block>
      Welcome to Traval Buuds
      <LoginRegister 
      status={this.state.status}
      register={this.register}
      />
    </Header>
  );
}
}



