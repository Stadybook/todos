import React from "react";
import './TasksFilter.css';

const TasksFilter = ({label, classN}) => {
    return(
        <button
         className={classN}>
           {label}
         </button>
    );
};

export default TasksFilter;