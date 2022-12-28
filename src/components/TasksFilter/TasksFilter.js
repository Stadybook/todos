import React, { Component } from "react";
import './TasksFilter.css';

export default class TasksFilter extends Component{

  render(){

  const {label, classN} = this.props;

    return(
      <button
       className={classN}>
         {label}
       </button>
    );
  }
}
