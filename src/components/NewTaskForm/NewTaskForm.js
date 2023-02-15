import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './NewTaskForm.css';

export default function NewTaskForm({ onTaskAdded }) {
    const [label, setLabel] = useState('');
    const [time, setTime] = useState({ minutes: '', seconds: '' });

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
        const sec =
            Math.abs(Number(time.minutes) * 60) +
            Math.abs(Number(time.seconds));
        onTaskAdded(label, sec);
        setLabel('');
        setTime({ minutes: '', seconds: '' });
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
                onChange={(e) =>
                    setTime((prev) => {
                        return { ...prev, minutes: e.target.value };
                    })
                }
                value={time.minutes}
            />
            <input
                className='new-todo-form__timer'
                name='seconds'
                placeholder='Sec'
                onChange={(e) =>
                    setTime((prev) => {
                        return { ...prev, seconds: e.target.value };
                    })
                }
                value={time.seconds}
            />
            <input className='hidden' type='submit' />
        </form>
    );
}

NewTaskForm.propTypes = {
    onTaskAdded: PropTypes.func.isRequired,
};
