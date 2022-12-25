import React from "react";
import './NewTaskForm.css';


const NewTaskForm = () => {

  const text = "Editing task"
  
    return ( 
      <div className="editing">
        <div className="view">
            <input className="toggle" type="checkbox" />
              <label>
                <span className="description">Editing task</span>
                <span className="created">created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
          </div>
        <input type="text" className="edit" placeholder={text} />
      </div>
    );
  };
  

export default NewTaskForm;
