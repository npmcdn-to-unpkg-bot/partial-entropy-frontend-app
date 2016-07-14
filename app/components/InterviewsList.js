import React, { Component } from 'react';
import { Router, Link } from 'react-router';

export default class InterviewsList extends Component{
  render(){
    console.log(this.props.location);
    return(
      <ul>
        <li><Link to={{key:'wangergou',pathname:'/interviews/王二狗', state: { modal: true, returnTo: this.props.location.pathname }}}>王二狗</Link></li>
        <li><Link to={{key:'ligoudan',pathname:'/interviews/李狗蛋', state: { modal: true, returnTo: this.props.location.pathname }}}>李狗蛋</Link></li>
      </ul>
    );
  }
}
