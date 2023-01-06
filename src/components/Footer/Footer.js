import React, { Component } from "react";
import TasksFilter from "../TasksFilter/TasksFilter";
import './Footer.css'


export default class Footer extends Component{
  
  render(){

    const {todoTasks,filter, onfilterTask, onClearCompleted, filterTodoData, choseFilter} = this.props;

      return(
          <footer className="footer">
            <span className="todo-count">{todoTasks} items left</span>
            <TasksFilter 
            filter={filter}
            onfilterTask={(label) => onfilterTask(label)} 
            filterTodoData={() => filterTodoData()}
            choseFilter={(btn,label) => choseFilter(btn, label)}/>
            <button 
            className="clear-completed"
            onClick={onClearCompleted}>
              Clear completed
            </button>
          </footer>
      );
  }
} 

  