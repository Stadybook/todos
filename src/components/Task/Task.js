import React, { Component } from "react";
import './Task.css';

export default class Task extends Component{

    render(){

    const {label, onDeleted, id, checked, onToggleCompleted,onToggleChecked, onEditeTask, completed} = this.props;
    let classNames = 'description';

    if(completed || checked){
        classNames += ' completed';
    }


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

