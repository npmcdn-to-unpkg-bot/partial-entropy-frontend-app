import React, { Component } from 'react';
import { Router, Link } from 'react-router';
import { Menu } from 'antd';

const Item = Menu.Item;

export default class LeftNavigation extends Component{
  render(){
    return(
      <div>
        <Menu mode='inline'>
          <Item><Link to='/dashboard'>总览</Link></Item>
          <Item><Link to='/candidates'>候选人管理</Link></Item>
          <Item><Link to='/interviews'>面试安排</Link></Item>
          <Item><Link to='/postings'>职位管理</Link></Item>
          <Item><Link to='/archives'>简历库</Link></Item>
          <Item><Link to='/statistics'>数据报告</Link></Item>
        </Menu>
      </div>
    );
  }
}
