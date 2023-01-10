import React, { Component } from 'react';
import './TasksFilter.css';

export default class TasksFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btns: [
        { key: 'all', name: 'All' },
        { key: 'false', name: 'Active' },
        { key: 'true', name: 'Completed' },
      ],
    };
  }

  render() {
    const { btns } = this.state;
    const { onfilterTask } = this.props;

    return (
      <ul className='filters'>
        {btns.map((el) => (
          <li key={el.key}>
            <button
              type='button'
              className=''
              onClick={() => onfilterTask(el.name)}
              btn={el.key}
              label={el.name}
            >
              {el.name}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
