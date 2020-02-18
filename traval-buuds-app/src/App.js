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
  render() {


  return (
    <Header as='h3' className="App" block>
      Welcome to Traval Buuds
      <LoginRegister 
      status={this.state.status}
      />
    </Header>
  );
}
}



