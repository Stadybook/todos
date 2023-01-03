import React from "react";
import Task from "../Task";
import './TaskList.css';

const TaskList = ({ todos, onDeleted, onToggleCompleted, onToggleChecked, onEditeTask}) => {

 
    const elements = todos.map((item) => {
      
        const {id} = item;
        if(!item.edit){
        return (
            <li key={id} >
                <Task { ...item} 
                 onDeleted={() => onDeleted(id)}
                 onToggleCompleted={() => onToggleCompleted(id)}
                 onEditeTask={() => onEditeTask(id)}
                 onToggleChecked={() => onToggleChecked(id)}/>
            </li>
        );
      }
      else{
        const text = "Editing task"
        return (
          <li key={id} className='editing'> 
            <Task { ...item} />
            <input type="text" 
            className="edit" 
            placeholder={text}/>
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