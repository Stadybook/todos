import React from "react";
import TasksFilter from "../TasksFilter/TasksFilter";
import './Footer.css'


const Footer = ({todoTasks, onfilterTask, onClearCompleted} ) => {
  const btnData = [ 
    {label: 'All', classN: 'selected' ,id: 1},
    {label: 'Active',id: 2},
    {label: 'Completed', id: 3},
  ];


  const elements = btnData.map((item) => {
      
    const { id, ...itemProps } = item;
    const {classN} = itemProps

    return (
        <li key={id} >
            <TasksFilter { ...itemProps} 
            onfilterTask={() => onfilterTask(classN)}/>
        </li>
    );
  })

    return(
        <footer className="footer">
          <span className="todo-count">{todoTasks} items left</span>
          <ul className="filters">
          { elements }
          </ul>
          <button 
          className="clear-completed"
          onClick={onClearCompleted}>
            Clear completed
          </button>
        </footer>
    );
};


export default Footer;