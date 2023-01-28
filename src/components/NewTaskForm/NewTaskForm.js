/* eslint-disable react/no-unused-state */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {
    constructor() {
        super();
        this.state = {
            label: '',
            seconds: '',
            minutes: '',
        };
    }

    onLabelChange = (e) => {
        if (e.target.value.length === 1) {
            const label = e.target.value.trim().replace(/ +/g, ' ');
            this.setState({
                label,
            });
        } else {
            this.setState({
                label: e.target.value,
            });
        }
    };

    onSetTimer = (e) => {
        if (/[0-9]|\./.test(e.target.value) || e.target.value === '') {
            this.setState({
                [e.target.name]: e.target.value,
            });
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { label } = this.state;
        const { onTaskAdded } = this.props;
        onTaskAdded(label);
        this.setState({
            label: '',
        });
    };

    render() {
        const { label, seconds, minutes } = this.state;

        return (
            <form className='new-todo-form' onSubmit={this.onSubmit}>
                <input
                    className='new-todo'
                    required
                    placeholder='What needs to be done?'
                    onChange={this.onLabelChange}
                    value={label}
                />
                <input
                    className='new-todo-form__timer'
                    required
                    name='minutes'
                    placeholder='Min'
                    onChange={this.onSetTimer}
                    value={minutes}
                />
                <input
                    className='new-todo-form__timer'
                    required
                    name='seconds'
                    placeholder='Sec'
                    onChange={this.onSetTimer}
                    value={seconds}
                />
            </form>
        );
    }
}

NewTaskForm.propTypes = {
    onTaskAdded: PropTypes.func.isRequired,
};
