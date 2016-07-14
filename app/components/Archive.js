import React, { Component } from 'react';
import { Router, Link } from 'react-router';

export default class Archive extends Component{
  render(){
    return(
     <h1>{'这里是候选人'+this.props.params.id+'简历'}</h1>
    );
  }
}
