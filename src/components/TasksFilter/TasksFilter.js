import React, { Component } from "react";
import './TasksFilter.css';

export default class TasksFilter extends Component{

  state = {
    btns : [
     {key: 'all', name:'All' },
     {key: 'false' ,name: 'Active'},
     {key: 'true' ,name: 'Completed'},
   ]
 }



 render(){
  return (
      <ul className="filters">
        {this.state.btns.map(el => (
          <li key={el.key}>
             <button className='' 
             onClick={() => this.props.onfilterTask(el.name)}
             btn={el.key}
             label={el.name}>
             {el.name}
             </button>
          </li>
        ))}
      </ul>
  )
 }
}
