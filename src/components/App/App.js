import React, { Component } from "react";
import Header from '../Header';
import TaskList from '../TaskList';
import NewTaskForm from '../NewTaskForm';
import Footer from '../Footer';
import './App.css'



export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      todoData : [],
      filter:'All',
    };  

  }
  
  render(){

    const { todoData } = this.state;
    const completedTasks = todoData.filter((el) => el.completed || el.checked).length;
    const todoTasks = todoData.length - completedTasks;


    let todoItemsShown;
    switch (this.state.filter) {
      case 'Completed':
        todoItemsShown = todoData.filter((el) => el.completed);
        break;
      case 'Active':
        todoItemsShown = todoData.filter((el) => !el.completed);
        break;
      default:
        todoItemsShown = todoData;
    }
  
      return (
        <section className="todoapp">
            <Header />
            <NewTaskForm 
            onTaskAdded={this.addTask.bind(this)}/>
            <section className="main">
              <TaskList 
              todos={todoItemsShown} 
              onDeleted={this.deleteTask.bind(this)}
              onToggleCompleted={this.onToggleCompleted.bind(this)}
              onToggleChecked={this.onToggleChecked.bind(this)}
              onEditeTask={this.editeTask.bind(this)}
              onChangeName={this.changeName.bind(this)}/>
            
            <Footer 
            todoTasks={todoTasks}
            onfilterTask={this.changeStatefilter.bind(this)}
            onClearCompleted={this.clearCompleted.bind(this)}/>
            </section>
        </section>
      );
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
      completed:false,
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

  toggleProperty(arr, id, propName,propName2=undefined){
 
    const index = arr.findIndex((el) => el.id === id);

    const oldItem = arr[index];
    const newItem = {...oldItem,
    [propName]: !oldItem[propName],
    [propName2]: !oldItem[propName2]
  }
    return[
    ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ]

  }

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      return{
        todoData: this.toggleProperty(todoData, id, 'completed','checked')
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
    this.setState(({ todoData }) => {

      let newData = this.toggleProperty(todoData, id, 'edit');
      return{
        todoData: newData
     };
    });
  };

  changeName = (id, text) => {
    this.setState(({ todoData }) => {
      id = Number(id)
      const index = todoData.findIndex((el) =>el.id === id);
      const oldItem = todoData[index];

      const newItem = {...oldItem,
      label: text,
      edit: !oldItem.edit,
      };

      const newData = [
        ...todoData.slice(0, index),
        newItem,
        ...todoData.slice(index + 1)
      ]

      return{
        todoData: newData
     };
    });
  }
  
  changeStatefilter = (label) => {
    this.setState(() => {
      const newFilter = label
      return{
        filter: newFilter
     };
    });

  }

  choseFilter = (btn, label) => {
    const newFilter = label
    //console.log(this.state.filter)
      if(btn === 'all') {
        this.setState({
          filter: newFilter,
          currentItems:this.state.todoData
        })
        return
      }

      this.setState({
        filter: label,
        currentItems: this.state.todoData.filter(el => String(el.checked) === btn) 
    })
    
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
}

