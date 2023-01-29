import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './TasksFilter.css';

export default class TasksFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btns: [{ name: 'All' }, { name: 'Active' }, { name: 'Completed' }],
        };
    }

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
        const { btns } = this.state;
        const { filter } = this.props;
        return (
            <ul className='filters'>
                {btns.map((el) => (
                    <li key={el.name}>
                        <button
                            className={filter === el.name ? 'active' : ' '}
                            type='button'
                            onClick={this.onClick}
                            btn={el.name}
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

TasksFilter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
};
