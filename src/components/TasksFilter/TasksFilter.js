import React, { Component } from "react";
import './TasksFilter.css';

export default class TasksFilter extends Component{

  state = {
    btns : [
     {key: 'all', name:'All' },
     {key: 'false' ,name: 'Active'},
     {key: 'true' ,name: 'Completed'},
   ]
 }

// onClick={() => this.props.onfilterTask(el.name) & this.props.filterTodoData()}
 render(){
  return (
      <ul className="filters">
        {this.state.btns.map(el => (
          <li key={el.key}>
             <button className='' 
             onClick={() => this.props.choseFilter(el.key, el.name)}
            
             btn={el.key}
             label={el.name}>
             {el.name}
             </button>
          </li>
        ))}
      </ul>
  )
 }


  /*state = {
     btnLabes : [
      {label: 'All', id: 1},
      {label: 'Active', id:2},
      {label: 'Completed', id:3},
    ]
  }

  render(){

  const {onfilterTask, filter, filterTodoData} = this.props;
  console.log(filter)

   //<input id='1' className="toggle" type="radio" />

   /* return(
        <ul className="filters">
          <li>
            <button className=''
            onClick={onfilterTask}>
            All
            </button>
          </li>
          <li>
          
            <button className=''
            onClick={onfilterTask}>
              Active
            </button>
          </li>
          <li>
         
            <button className=''
            onClick={onfilterTask}>
            Completed
            </button>
          </li>
        </ul>
  );*/

 /*
  const elements = this.state.btnLabes.map((item) => {

    const {label, id} = item;

    let classN = '';
    if(filter === label){
    classN += 'selected';
    }

    return (
        <li key={id} className=''>
           <button className={classN}
            onClick={() => onfilterTask(label) & filterTodoData()}
            label={label}>
              {label}
            </button>
        </li>
    );
  })



  return (
    <ul className="filters">
    {elements}
    </ul>
  );

  }*/
}
