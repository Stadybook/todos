import React from "react";
import './NewTaskForm.css';


const NewTaskForm = () => {

  const text ="What needs to be done?"  

    return (
        <input className="new-todo" 
        placeholder={text}
        autoFocus />
    );
  };
  

export default NewTaskForm;
