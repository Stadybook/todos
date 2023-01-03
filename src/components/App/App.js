import React, { Component } from "react";
import Header from '../Header';
import TaskList from '../TaskList';
import NewTaskForm from '../NewTaskForm';
import Footer from '../Footer';
import './App.css'



export default class App extends Component {

  state = {
    todoData : [ 
     
    ],
    filter:'All'
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
      date:new Date(),
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

  onToggleSelectedBtn = (id) => {
    this.setState(({ todoData }) => {
      return{
        todoData: this.toggleProperty(todoData, id, 'selected')
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

  
  /*editeTask = (id) => {
    console.log('edit')
    this.setState(({ todoData }) => {

      const index = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[index];
      const newItem = {...oldItem,
        edit: !oldItem.edit};
  
      const newData = [
      ...todoData.slice(0, index),
        newItem,
        ...todoData.slice(index + 1)
      ]

      return{
        todoData: newData
      }
    });
  };*/

  filterTask = (label) => {
    this.setState(() => {
      const newFilter = label
      return{
        filter: newFilter
     };
    });
    console.log(this.state.filter)
  }

  clearCompleted= () => {
    this.setState(({ todoData }) => {

      const tasks = todoData.filter((el) => el.completed || el.checked);
      if(tasks.length === 0) return

      let arrIndexs = []
      tasks.forEach(element => {
        arrIndexs.push(element.id)
      });

      let newData = [...todoData]

      arrIndexs.forEach(function(id){
        const index = newData.findIndex((el) => el.id === id);
        newData = [...newData.slice(0, index), ...newData.slice(index + 1)];  
      })

      return{
        todoData: newData
     };

    });

  }


  
render(){

  const { todoData } = this.state;
  const completedTasks = todoData.filter((el) => el.completed || el.checked).length;
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
          
          <Footer 
          todoTasks={todoTasks}
          onfilterTask={this.filterTask}
          onClearCompleted={this.clearCompleted}/>
          </section>
      </section>
    );
  }
}

