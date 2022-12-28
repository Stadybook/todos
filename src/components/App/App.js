import React, { Component } from "react";
import Header from '../Header';
import TaskList from '../TaskList';
import NewTaskForm from '../NewTaskForm';
import Footer from '../Footer';
import AddForm from "../AddForm";
import './App.css'



export default class App extends Component {

  newId = 100;

  state = {
    todoData : [ 
      {label: 'Completed task',id: 1},
      {label: 'Editing task', completed: false, classN: 'editing' ,id: 2},
      {label: 'Active task',  id: 3},
    ]
  }
  
  deleteTask = (id) => {
    this.setState(({ todoData }) => {

      const index = todoData.findIndex((el) =>el.id === id);

      const newData = [...todoData.splice(0, index), ...todoData.splice(index + 1)];

      return{
        todoData : newData
      }

    });
  }

  addTask = (text) => {
    const newTask = {
      label:text,
      id:this.newId++,
    }
    
    this.setState(({ todoData }) => {
      const newData = [...todoData, newTask]

      return {
        todoData: newData
      }
    }) 
  }

render(){
    return (
      <section className="todoapp">
          <Header />
          <NewTaskForm />
          <section className="main">
            <TaskList 
            todos={this.state.todoData} 
            onDeleted={ this.deleteTask}/>
          </section>
          <Footer />
          <AddForm 
          onTaskAdded={ this.addTask}/>
      </section>
    );
  }
}

