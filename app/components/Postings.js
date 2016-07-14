import React, { Component } from 'react';
import { Router, Link } from 'react-router';
import { Select } from 'antd';
const Option = Select.Option;


let children = [<Option key={'java developer'}>{'java developer'}</Option>,<Option key={'cpp developer'}>{'cpp developer'}</Option>];



export default class Postings extends Component{
  constructor(props,context){
    super(props);
    context.router;
  }

  handleChange(value){
    console.log(this.props.location);
    this.context.router.push({pathname:'/postings',query:{jobtype:value}});
  }

  render(){
    return(
      <div>
       <h1>这里是职位列表</h1>
         <Select tags
              style={{ width: '100%' }}
              searchPlaceholder="标签模式"
              onChange={this.handleChange.bind(this)}>
              {children}
        </Select>
        <ul>
         <li><Link to='/postings/煮饭阿姨'>煮饭阿姨</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

Postings.contextTypes = {
    router: React.PropTypes.object.isRequired
};
