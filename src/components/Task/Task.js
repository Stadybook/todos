import React, { Component } from "react";
import {formatDistanceToNow } from 'date-fns';
import './Task.css';

export default class Task extends Component{

    render(){

    const {label,date, onDeleted, id, checked, onToggleCompleted,onToggleChecked, onEditeTask, completed} = this.props;
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
                    <span className="created">{result}</span>
                </label>
            <button type='button'
            className='icon icon-edit float-right'
            onClick={onEditeTask}></button>
            <button type='button'
            className='icon icon-destroy float-right'
            onClick={onDeleted}>  
            </button>
        </div>
        );

    }

}

