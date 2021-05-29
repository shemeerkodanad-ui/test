import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react'
  
  export default class PrivateRoute extends Component {
     logedIn = localStorage.getItem('logedIn')
      render() {
          const Component = this.props.component;
          return this.logedIn ?  (
            <Component {...this.props} />
          ): (
            <Redirect to={{pathname: '/login', state: {from: this.props.location}}} />
          )             
          
      }
  }
  

