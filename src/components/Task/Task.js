import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

import './Task.css';
import Timer from '../Timer';

function Task({
    label,
    deadline,
    date,
    onDeleted,
    id,
    onChangeName,
    changeDeadline,
    toggleProperty,
    completed,
}) {
    const [labelState, changeLabel] = useState(label);
    const [edit, onEditTask] = useState(false);

    const onLabelChange = (e) => {
        if (e.target.value.length === 1) {
            const newLabel = e.target.value.trim().replace(/ +/g, ' ');
            changeLabel(newLabel);
        } else {
            changeLabel(e.target.value);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onChangeName(e.target.id, labelState);
        onEditTask(false);
    };

    const result = formatDistanceToNow(date, { includeSeconds: true });
    const classNames = completed ? 'description completed' : 'description';
    const content = edit ? (
        <form className='' onSubmit={onSubmit} id={id}>
            <input
                type='text'
                className='edit'
                placeholder='Editing task'
                onChange={onLabelChange}
                value={labelState}
            />
        </form>
    ) : (
        <div className='view'>
            <input
                id={id.toString()}
                className='toggle'
                type='checkbox'
                onChange={() => toggleProperty(id, 'completed')}
                checked={completed}
            />
            <label htmlFor={id}>
                <span className={classNames}>{labelState}</span>
                <Timer
                    changeDeadline={changeDeadline}
                    deadline={deadline}
                    completed={completed}
                    id={id}
                />
                <span className='created'>created {result}</span>
            </label>
            <button
                type='button'
                className='icon icon-edit float-right'
                onClick={() => onEditTask(true)}
            />
            <button
                type='button'
                className='icon icon-destroy float-right'
                onClick={onDeleted}
            />
        </div>
    );

    return <li className={edit ? 'editing' : ''}>{content}</li>;
}
export default Task;

Task.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    toggleProperty: PropTypes.func.isRequired,
    onDeleted: PropTypes.func.isRequired,
};
