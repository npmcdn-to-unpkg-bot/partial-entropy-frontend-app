import React, { Component } from 'react';
import { Router, Link } from 'react-router';

export default class Posting extends Component{
  render(){
    return(
     <h1>{'这里是职位'+this.props.params.id+'详细信息'}</h1>
    );
  }
}
