import React, { Component } from "react";
import './TasksFilter.css';

export default class TasksFilter extends Component{

  render(){

  const {label,onfilterTask,selected} = this.props;

  let classN = '';

    if(selected){
        classN += 'selected';
    }

    return(
      <button
       className={classN}
       onClick={onfilterTask}>
         {label}
       </button>
    );
  }
}
