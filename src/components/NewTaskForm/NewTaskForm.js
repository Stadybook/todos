import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './NewTaskForm.css';

export default function NewTaskForm({ onTaskAdded }) {
    const [label, setLabel] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    const onLabelChange = (e) => {
        if (e.target.value.length === 1) {
            const newLabel = e.target.value.trim().replace(/ +/g, ' ');
            setLabel(newLabel);
        } else {
            setLabel(e.target.value);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const sec = Number(minutes) * 60 + Number(seconds);
        onTaskAdded(label, sec);
        setLabel('');
        setMinutes('');
        setSeconds('');
    };

    return (
        <form className='new-todo-form' onSubmit={onSubmit}>
            <input
                className='new-todo'
                name='label'
                required
                placeholder='What needs to be done?'
                onChange={onLabelChange}
                value={label}
            />
            <input
                className='new-todo-form__timer'
                name='minutes'
                placeholder='Min'
                onChange={(e) => setMinutes(e.target.value)}
                value={minutes}
            />
            <input
                className='new-todo-form__timer'
                name='seconds'
                placeholder='Sec'
                onChange={(e) => setSeconds(e.target.value)}
                value={seconds}
            />
            <input className='hidden' type='submit' />
        </form>
    );
}

NewTaskForm.propTypes = {
    onTaskAdded: PropTypes.func.isRequired,
};
