import React from "react";
import Task from "../Task";
import NewTaskForm from "../NewTaskForm";
import './TaskList.css';

const TaskList = ({ todos }) => {

    const elements = todos.map((item) => {
      
        const { id, ...itemProps } = item;
      
        if(item.id != 2){
        return (
            <li key={id} >
                <Task { ...itemProps} />
            </li>
        );
      }
      else{
        return (
          <li key={id}>
              <NewTaskForm />
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