/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './Task.css';

export default class Task extends Component {
    constructor(props) {
        super(props);
        const { label } = this.props;
        this.state = {
            labelState: label,
            edit: false,
            time: null,
            timer: null,
        };
    }

    onStop = () => {
        clearInterval(this.state.timer);
    };

    onStart = () => {
        if (this.state.time === null) {
            const { minutes, seconds } = this.props;
            const deadline = minutes * 60 + seconds;
            this.setState({
                time: deadline,
            });
        }
        const timer = setInterval(() => {
            const time = this.state.time - 1;
            if (time <= 0) {
                clearInterval(timer);
                return;
            }
            this.setState({
                time,
                timer,
            });
        }, 1000);
    };

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
            minutes,
            seconds,
            date,
            onDeleted,
            id,
            onToggleCompleted,
            completed,
        } = this.props;
        const timeShow =
            this.state.timer === null
                ? `${minutes} : ${seconds}`
                : `${this.state.time}`;
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
                    <span className='time'>
                        <button
                            className='icon icon-play'
                            type='button'
                            onClick={this.onStart}
                        />
                        <button
                            className='icon icon-pause'
                            type='button'
                            onClick={this.onStop}
                        />
                        {timeShow}
                    </span>
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
