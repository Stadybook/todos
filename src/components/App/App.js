import React from "react";
import Header from '../Header';
import TaskList from '../TaskList';
import NewTaskForm from '../NewTaskForm';
import TasksFilter from "../TasksFilter";
import Footer from '../Footer';
import './App.css'


const App = () => {
    const todoData = [ 
      {label: 'Completed task', completed: true, className: 'completed' ,id: 1},
      {label: 'Editing task', completed: false, className: 'editing' ,id: 2},
      {label: 'Active task', completed: false, id: 3},
    ];
  
    return (
      <section className="todoapp">
          <Header />
          <TasksFilter />
          <section className="main">
            <TaskList todos={todoData} />
          </section>
          <Footer />
      </section>
    );
  };

export default App;