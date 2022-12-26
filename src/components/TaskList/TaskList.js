import React from "react";
import Task from "../Task";
import './TaskList.css';

const TaskList = ({ todos }) => {

    const elements = todos.map((item) => {
      
        const { id, ...itemProps } = item;
        
      
        if(item.classN !== 'editing'){
        return (
            <li key={id} >
                <Task { ...itemProps} />
            </li>
        );
      }
      else{
        const text = "Editing task"
        return (
          <li key={id}>
            <Task { ...itemProps} />
            <input type="text" className="edit" placeholder={text} />
          </li>
      );
      }
    });
  
    return (
      <ul className="todo-list">
        { elements }
      </ul>
    );

}

export default TaskList;