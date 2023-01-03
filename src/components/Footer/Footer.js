import React from "react";
import TasksFilter from "../TasksFilter/TasksFilter";
import './Footer.css'


const Footer = ({todoTasks, onfilterTask, onClearCompleted} ) => {
  const btnData = [ 
    {label: 'All' ,id: 1, selected:false},
    {label: 'Active',id: 2,  selected:false},
    {label: 'Completed', id: 3,  selected:false},
  ];


  const elements = btnData.map((item) => {
      
    const { id, ...itemProps } = item;
    const {label} = itemProps

    return (
        <li key={id} >
            <TasksFilter { ...itemProps} 
            onfilterTask={() => onfilterTask(label)}/>
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