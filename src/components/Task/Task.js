/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-comment-textnodes */

import React, { Component } from 'react';
import {formatDistanceToNow } from 'date-fns';
import './Task.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Task extends Component{

  render(){

    const {label, date, onDeleted, id, checked, onToggleCompleted,onToggleChecked, onEditeTask, completed} = this.props;
    let classNames = 'description';

    if(completed || checked){
      classNames += ' completed';
    }

    const result = formatDistanceToNow(date, {includeSeconds:true})


    return(
      <div className='view'>
        <input id={id} className="toggle" type="checkbox" 
          onClick={onToggleChecked}/>
        <label htmlFor= {id}>
          <span 
            className={classNames}
            onClick={onToggleCompleted}>
            {label}
          </span>
          <span className="created">created {result}</span>
        </label>
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button type='button'
          className='icon icon-edit float-right'
          onClick={onEditeTask} />
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button type='button'
          className='icon icon-destroy float-right'
          onClick={onDeleted} />
      </div>
    );

  }

}

