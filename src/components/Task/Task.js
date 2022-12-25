import React from "react";
import './Task.css';


const Task = ( {label, completed,className}) => {

    const style = {
        color: completed ? '#cdcdcd' : '#4d4d4d',
        textDecoration: completed ? 'line-through' : 'none'
    };

    return(
        <span className = {className}>
        <div className='view'>
            <input className="toggle" 
            type="checkbox" />
                <label>
                    <span 
                    className="description"
                    style={style}>
                        {label}
                        </span>
                    <span className="created">created 5 minutes ago</span>
                </label>
            <button type='button'className='icon icon-edit float-right'></button>
            <button type='button'className='icon icon-destroy float-right'></button>
        </div>
        </span>
        );
};

export default Task;