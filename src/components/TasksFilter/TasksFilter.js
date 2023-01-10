import React, { Component } from 'react';
import './TasksFilter.css';

export default class TasksFilter extends Component {
    constructor() {
        super();
        this.state = {
            btns: [
                { key: '1', name: 'All' },
                { key: '2', name: 'Active' },
                { key: '3', name: 'Completed' },
            ],
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick = (event) => {
        const { onFilterChange } = this.props;
        const classSelected = 'selected';

        const buttons = document.querySelectorAll('.filters button');

        buttons.forEach((button) => {
            if (button.textContent === this.filter) {
                if (!button.classList.contains(classSelected)) {
                    button.classList.add(classSelected);
                }
            }
        });
        if (event.target.classList.contains(classSelected)) {
            return;
        }
        buttons.forEach((button) => {
            button.classList.remove(classSelected);
        });

        event.target.classList.add(classSelected);
        onFilterChange(event.target.textContent);
    };

    render() {
        const { btns } = this.state;
        return (
            <ul className='filters'>
                {btns.map((el) => (
                    <li key={el.key}>
                        <button
                            type='button'
                            onClick={this.onClick}
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
