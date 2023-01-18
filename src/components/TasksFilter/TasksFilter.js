import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './TasksFilter.css';

export default class TasksFilter extends Component {
    onClick = (event) => {
        const { onFilterChange } = this.props;
        const classSelected = 'selected';

        const buttons = document.querySelectorAll('.footer button');

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
        return (
            <ul className='filters'>
                <li key='All'>
                    <button
                        className='selected'
                        type='button'
                        onClick={this.onClick}
                        btn='All'
                        label='All'
                    >
                        All
                    </button>
                </li>
                <li key='Active'>
                    <button
                        className=''
                        type='button'
                        onClick={this.onClick}
                        btn='Active'
                        label='Active'
                    >
                        Active
                    </button>
                </li>
                <li key='Completed'>
                    <button
                        className=''
                        type='button'
                        onClick={this.onClick}
                        btn='Completed'
                        label='Completed'
                    >
                        Completed
                    </button>
                </li>
            </ul>
        );
    }
}

TasksFilter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
};
