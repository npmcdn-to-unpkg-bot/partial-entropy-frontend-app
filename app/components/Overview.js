import React, { Component } from 'react';
import { Router, Link } from 'react-router';

export default class Overview extends Component{
  render(){
    return(
      <div>
       <h1>这里是总览</h1>
       <div><Link to={{ pathname: '/candidates', query: { stage: '初筛'} }}>初筛候选人</Link></div>
      </div>
    );
  }
}
