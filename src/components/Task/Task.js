import React, { Component } from "react";
import './Task.css';

export default class Task extends Component{

    state = {
        completed: false,

    }

    onLabelClick = () =>{
        this.setState((state) => {
            return {
                completed: !state.completed
            };
        });
    };

    render(){

    const {label, classN, onDeleted,id} = this.props;
    console.log(this.props)
    const { completed } = this.state;
    

    let classNames = 'description';
    if(completed){
        classNames += ' completed';
    }

    return(
        <span className = {classN}>
        <div className='view'>
            <input id={id} className="toggle" type="checkbox" />
                <label htmlFor={id} >
                    <span 
                    className={classNames}
                    onClick={ this.onLabelClick }>
                        {label}
                    </span>
                </label>
            <button type='button'className='icon icon-edit float-right'></button>
            <button type='button'
            className='icon icon-destroy float-right'
            onClick={onDeleted}>  
            </button>
        </div>
        </span>
        );

    }

}

