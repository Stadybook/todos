import React, { Component } from "react";
import './AddForm.css';

export default class AddForm extends Component{

    render(){
        return(
            <div className="add-form">
                <button 
                className="selected "
                onClick={() => this.props.onTaskAdded('New Task')}>
                    Add
                </button>
            </div>
        )
    }
}