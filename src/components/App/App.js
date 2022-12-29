import React, { Component } from "react";
import Header from '../Header';
import TaskList from '../TaskList';
import NewTaskForm from '../NewTaskForm';
import Footer from '../Footer';
import './App.css'



export default class App extends Component {

  state = {
    todoData : [ 
      {label: 'Completed task',completed: false,checked: false, edit: false, id: 1},
      {label: 'Editing task',completed: false,checked: false,edit: false, id: 2},
      {label: 'Active task',completed: false,checked: false, edit: false,  id: 3},
    ]
  }

 

  deleteTask = (id) => {
    this.setState(({ todoData }) => {

      const index = todoData.findIndex((el) => el.id === id);

      const newData = [...todoData.slice(0, index), ...todoData.slice(index + 1)];

      return{
        todoData : newData
      }

    });
  }

  addTask = (text) => {
    const newTask = {
      label:text,
      id:this.state.todoData.length + 1,
      checked: false,
      edit:false,
      data:new Date()
    }
    
    this.setState(({ todoData }) => {
      const newData = [...todoData, newTask]

      return {
        todoData: newData
      }
    }) 
  }

  toggleProperty(arr, id, propName){

    const index = arr.findIndex((el) => el.id === id);

    const oldItem = arr[index];
    const newItem = {...oldItem,
    [propName]: !oldItem[propName]};

    return[
    ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ]

  }


  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      return{
        todoData: this.toggleProperty(todoData, id, 'completed')
     };
    });
  };

  onToggleChecked = (id) => {
    this.setState(({ todoData }) => {
      return{
        todoData: this.toggleProperty(todoData, id, 'checked')
     };
    });
  };

  editeTask = (id) => {
    console.log('edit')
    this.setState(({ todoData }) => {
      return{
        todoData: this.toggleProperty(todoData, id, 'edit')
     };
    });
  };

  
render(){

  const { todoData } =this.state;
  const completedTasks = todoData.filter((el) => el.completed).length;
  const todoTasks = todoData.length - completedTasks;

    return (
      <section className="todoapp">
          <Header />
          <NewTaskForm 
          onTaskAdded={ this.addTask}/>
          <section className="main">
            <TaskList 
            todos={this.state.todoData} 
            onDeleted={ this.deleteTask}
            onToggleCompleted={this.onToggleCompleted}
            onToggleChecked={this.onToggleChecked}
            onEditeTask={this.editeTask}/>
          </section>
          <Footer todoTasks={todoTasks}/>
      </section>
    );
  }
}

