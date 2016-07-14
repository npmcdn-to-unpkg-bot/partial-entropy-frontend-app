import React, { Component } from 'react';
import { Router, Link } from 'react-router';

/**test component, just for modal test**/
const Modal = React.createClass({
  styles: {
    position: 'fixed',
    top: '20%',
    right: '20%',
    bottom: '20%',
    left: '20%',
    padding: 20,
    boxShadow: '0px 0px 150px 130px rgba(0, 0, 0, 0.5)',
    overflow: 'auto',
    background: '#fff'
  },

  render() {
    return (
      <div style={this.styles}>
        <p><Link to={this.props.returnTo}>Back</Link></p>
        {this.props.children}
      </div>
    )
  }
})


export default class Interviews extends Component{
   componentWillReceiveProps(nextProps) {

   // if we changed routes...
    if ((
      nextProps.location.key !== this.props.location.key &&
      nextProps.location.state &&
      nextProps.location.state.modal
     )) {
     // save the old children (just like animation)
      this.previousChildren = this.props.children
     }
  }

  render(){
    let { location } = this.props;

    let isModal = (
      location.state &&
      location.state.modal 
      //this.previousChildren
    )

    return(
      <div>
       <h1>这里是面试安排</h1>
         <ul>
           <li><Link to={{key:'wangergou',pathname:'/interviews/王二狗', state: { modal: true, returnTo: this.props.location.pathname }}}>王二狗</Link></li>
           <li><Link to={{key:'ligoudan',pathname:'/interviews/李狗蛋', state: { modal: true, returnTo: this.props.location.pathname }}}>李狗蛋</Link></li>
         </ul>
       <div>
         {isModal ?
           this.previousChildren :
           this.props.children
         }

         {isModal && (
           <Modal isOpen={true} returnTo={location.state.returnTo}>
             {this.props.children}
           </Modal>
         )}
       </div>
      </div>
    );
  }
}
