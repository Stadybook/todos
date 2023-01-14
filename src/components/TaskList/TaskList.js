import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Task from '../Task';

import './TaskList.css';

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: '',
            edit: false,
        };

        this.onLabelChange = this.onLabelChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handlerClick = () => {
        const { edit } = this.state;
        const newEdit = !edit;
        this.setState({
            edit: newEdit,
        });
    };

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
            edit: false,
        });
    };

    render() {
        const { todos, onDeleted, onToggleCompleted } = this.props;

        const elements = todos.map((item) => {
            const { id } = item;
            const { edit } = this.state;
            const { label } = this.state;

            const input = (
                <form className='' onSubmit={this.onSubmit} id={id}>
                    <input
                        type='text'
                        className='edit'
                        placeholder='Editing task'
                        onChange={this.onLabelChange}
                        value={label}
                    />
                </form>
            );

            let clazz = '';
            if (edit) {
                clazz = 'editing';
            }

            const el = edit ? input : null;
            return (
                <li key={id} className={clazz}>
                    <Task
                        {...item}
                        onDeleted={() => onDeleted(id)}
                        onToggleCompleted={() => onToggleCompleted(id)}
                        handlerClick={this.handlerClick}
                    />
                    {el}
                </li>
            );
        });

        return <ul className='todo-list'>{elements}</ul>;
    }
}

TaskList.propTypes = {

    onToggleCompleted: PropTypes.func.isRequired,
    onDeleted: PropTypes.func.isRequired,
};
