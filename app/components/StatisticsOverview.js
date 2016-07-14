import React, { Component } from 'react';
import { Router, Link } from 'react-router';

export default class StatisticsOverview extends Component{
  render(){
    return(
      <div>
       <ul>
       <li><Link to='/statistics/channel'>质量渠道</Link></li>
       <li><Link to='/statistics/resume'>简历收发情况</Link></li>
       </ul>
      </div>
    );
  }
}
