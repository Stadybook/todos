/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import Task from '../Task';
import './TaskList.css';

export default class TaskList extends Component {

  state = {
    label:''
  };


  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onChangeName(e.target.id, this.state.label);
  };

  render(){

    const { todos,  onDeleted, onToggleCompleted, onToggleChecked, onEditeTask} = this.props
 
    const elements = todos.map((item) => {
      
      const {id} = item;
      if(!item.edit){

        return (
          <li key={id} className=''>
            <Task { ...item} 
              onDeleted={() => onDeleted(id)}
              onToggleCompleted={() => onToggleCompleted(id)}
              onEditeTask={() => onEditeTask(id)}
              onToggleChecked={() => onToggleChecked(id)}/>
          </li>
        );
      }
      
      const text = 'Editing task'
      return (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <li key={id} className='editing'> 
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Task { ...item} />
          <form className="" onSubmit={this.onSubmit} id={id}>
            <input type="text" 
              className="edit" 
              placeholder={text}
              onChange={this.onLabelChange}
          
              value={this.state.label}/>
          </form>
        </li>
      );
    
    });

    return (
      <ul className="todo-list">
        { elements }
      </ul>
    );
  }
}

