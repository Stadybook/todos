import React from "react";
import Task from "../Task";
import './TaskList.css';

const TaskList = ({ todos, onDeleted }) => {

    const elements = todos.map((item) => {
      
        const { id, ...itemProps } = item;
        
      
        if(item.classN !== 'editing'){
        return (
            <li key={id} >
                <Task { ...itemProps} 
                 onDeleted={() => onDeleted(id)}/>
            </li>
        );
      }
      else{
        const text = "Editing task"
        return (
          <li key={id}>
            <Task { ...itemProps}
            onDeleted={() => console.log('deleted')} />
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