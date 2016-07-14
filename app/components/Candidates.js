import React, { Component } from 'react';
import { Router, Link } from 'react-router';
import { Menu } from 'antd';

const Item = Menu.Item;


export default class Candidates extends Component{
  constructor(props,context){
    super(props);
    context.router;
    this.state = {fchecked:false,nchecked:false};
  }

  handleCheck(type,event){
    var val = event.target.checked;
    var stage = this.props.location.query.stage;

    if(val){
      this.context.router.push({pathname:'/candidates',query:{jobtype:type,stage:stage}});
    }else{
      this.context.router.push({pathname:'/candidates',query:{stage:stage}});
    }

    if(type === 'frontend'){
      this.setState({fchecked:val,nchecked:false});
    }else{
      this.setState({fchecked:false,nchecked:val});
    }
  }

  render(){
    var location = this.props.location;
    var list = null;
    var queries = '';

    if(this.props.location.query.jobtype){
      var type = this.props.location.query.jobtype;
      list = ( <div>{'此处应显示'+type+''+'和'+this.props.location.query.stage+'的数据'}</div>);
    }else{
      list = (<div></div>);
    }

    if(this.state.fchecked){
      queries = 'frontend';
    }

    if(this.state.nchecked){
      queries = 'NodeJs';
    }

    return(
      <div>
       <h1>这里是候选人名单</h1>
       <div>
         <label>前端工程师</label>
         <input type='checkbox' checked={this.state.fchecked} onChange={this.handleCheck.bind(this,'frontend')}/>
         <label>NodeJs工程师</label>
         <input type='checkbox' checked={this.state.nchecked} onChange={this.handleCheck.bind(this,'NodeJs')}/>
         <Menu mode='horizontal'>
           <Item><Link to={{ pathname: '/candidates',query: {jobtype:queries}}}>总数</Link></Item>
           <Item><Link to={{ pathname: '/candidates', query: { stage: '初筛' ,jobtype:queries} }}>初筛</Link></Item>
           <Item><Link to={{ pathname: '/candidates', query: { stage: '用人部门筛选' ,jobtype:queries} }}>用人部门筛选</Link></Item>
           <Item><Link to={{ pathname: '/candidates', query: { stage: '面试中' ,jobtype:queries} }}>面试中</Link></Item>
           <Item><Link to={{ pathname: '/candidates', query: { stage: '沟通offer' ,jobtype:queries} }}>沟通offer</Link></Item>
         </Menu>
       </div>
       {list}
       {this.props.children}
      </div>
    );
  }
}

Candidates.contextTypes = {
    router: React.PropTypes.object.isRequired
};
