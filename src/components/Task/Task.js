import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';

import './Task.css';
import Timer from '../Timer';

export default class Task extends Component {
    constructor(props) {
        super(props);
        const { label } = this.props;
        this.state = {
            labelState: label,
            edit: false,
        };
    }

    onLabelChange = (e) => {
        this.setState({
            labelState: e.target.value,
        });
    };

    onSubmit = (e) => {
        const { labelState } = this.state;
        const { onChangeName } = this.props;
        e.preventDefault();
        onChangeName(e.target.id, labelState);
        this.setState({
            edit: false,
        });
    };

    handlerClick = () => {
        const newEdit = true;
        this.setState({
            edit: newEdit,
        });
    };

    render() {
        const {
            label,
            deadline,
            date,
            onDeleted,
            id,
            changeDeadline,
            onToggleCompleted,
            completed,
        } = this.props;

        const result = formatDistanceToNow(date, { includeSeconds: true });
        const { labelState } = this.state;
        const { edit } = this.state;
        const classNames = completed ? 'description completed' : 'description';
        const content = edit ? (
            <form className='' onSubmit={this.onSubmit} id={id}>
                <input
                    type='text'
                    className='edit'
                    placeholder='Editing task'
                    onChange={this.onLabelChange}
                    value={labelState}
                />
            </form>
        ) : (
            <div className='view'>
                <input
                    id={id.toString()}
                    className='toggle'
                    type='checkbox'
                    onChange={onToggleCompleted}
                    checked={completed}
                />
                <label htmlFor={id}>
                    <span className={classNames}>{label}</span>
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
                    onClick={this.handlerClick}
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
}

Task.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onToggleCompleted: PropTypes.func.isRequired,
    onDeleted: PropTypes.func.isRequired,
};
