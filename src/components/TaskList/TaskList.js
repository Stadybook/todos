import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Task from '../Task';

import './TaskList.css';

export default class TaskList extends Component {
    constructor() {
        super();
        this.state = {
            label: '',
        };

        this.onLabelChange = this.onLabelChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value,
        });
    };

    onSubmit = (e) => {
        const { onChangeName } = this.props;
        const { label } = this.state;
        e.preventDefault();
        onChangeName(e.target.id, label);
        this.setState({
            label: '',
        });
    };

    render() {
        const { todos, onDeleted, onToggleCompleted, onEditeTask } = this.props;

        const elements = todos.map((item) => {
            const { id } = item;
            if (!item.edit) {
                return (
                    <li key={id} className=''>
                        <Task
                            {...item}
                            onDeleted={() => onDeleted(id)}
                            onToggleCompleted={() => onToggleCompleted(id)}
                            onEditeTask={() => onEditeTask(id)}
                        />
                    </li>
                );
            }

            const text = 'Editing task';
            const { label } = this.state;
            return (
                <li key={id} className='editing'>
                    <Task {...item} />
                    <form className='' onSubmit={this.onSubmit} id={id}>
                        <input
                            type='text'
                            className='edit'
                            placeholder={text}
                            onChange={this.onLabelChange}
                            value={label}
                        />
                    </form>
                </li>
            );
        });

        return <ul className='todo-list'>{elements}</ul>;
    }
}

TaskList.propTypes = {
    onToggleCompleted: PropTypes.func.isRequired,
    onEditeTask: PropTypes.func.isRequired,
    onDeleted: PropTypes.func.isRequired,
};
