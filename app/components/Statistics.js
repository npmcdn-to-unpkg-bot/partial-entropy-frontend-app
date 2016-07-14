import React, { Component } from 'react';
import { Router, Link } from 'react-router';

export default class Statistics extends Component{
  render(){
    return(
      <div>
       <h1>这里是数据报告</h1>
       {this.props.children}
      </div>
    );
  }
}
