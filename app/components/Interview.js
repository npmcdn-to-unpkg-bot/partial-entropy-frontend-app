import React, { Component } from 'react';
import { Router, Link } from 'react-router';

export default class Interview extends Component{
  render(){
    return(
     <h1>{'这里是候选人'+this.props.params.id+'详细信息'}</h1>
    );
  }
}
