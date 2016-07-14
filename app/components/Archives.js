import React, { Component } from 'react';
import { Router, Link } from 'react-router';

import { Select } from 'antd';
const Option = Select.Option;


let children = [<Option key={'java developer'}>{'java developer'}</Option>,<Option key={'cpp developer'}>{'cpp developer'}</Option>];


export default class Archives extends Component{
  constructor(props,context){
    super(props);
    context.router;
  }

  handleChange(value){
    console.log(value);
    this.context.router.push({pathname:'/archives',query:{jobtype:value}});
  }

  render(){

    return(
      <div>
       <h1>这里是简历库</h1>
         <Select tags
              style={{ width: '100%' }}
              searchPlaceholder="标签模式"
              onChange={this.handleChange.bind(this)}>
              {children}
        </Select>
         <li><Link to='/archives/王二狗'>王二狗</Link></li>
         <li><Link to='/archives/李狗蛋'>李狗蛋</Link></li>
        
         {this.props.children}
      </div>
    );
  }
}

Archives.contextTypes = {
    router: React.PropTypes.object.isRequired
};
