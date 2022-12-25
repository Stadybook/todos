import React from "react";
import './TasksFilter.css';

const TasksFilter = () => {

const text ="What needs to be done?"

    return (
        <input className="new-todo" 
        placeholder={text}
        autoFocus />
    );
};

export default TasksFilter;