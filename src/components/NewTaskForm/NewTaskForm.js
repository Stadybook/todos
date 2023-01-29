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
        this.setState({
            label: '',
            seconds: '',
            minutes: '',
        });

        const { label, minutes, seconds } = this.state;
        const sec = Number(minutes) * 60 + Number(seconds);
        const { onTaskAdded } = this.props;
        onTaskAdded(label, sec);
    };

    render() {
        const { label, seconds, minutes } = this.state;

        return (
            <form className='new-todo-form' onSubmit={this.onSubmit}>
                <input
                    className='new-todo'
                    name='label'
                    required
                    placeholder='What needs to be done?'
                    onChange={this.onLabelChange}
                    value={label}
                />
                <input
                    className='new-todo-form__timer'
                    name='minutes'
                    placeholder='Min'
                    onChange={this.onSetTimer}
                    value={minutes}
                />
                <input
                    className='new-todo-form__timer'
                    name='seconds'
                    placeholder='Sec'
                    onChange={this.onSetTimer}
                    value={seconds}
                />
                <input className='hidden' type='submit' />
            </form>
        );
    }
}

NewTaskForm.propTypes = {
    onTaskAdded: PropTypes.func.isRequired,
};
