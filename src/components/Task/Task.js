import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './Task.css';

export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labelState: '',
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
            labelState: '',
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
        const { label, date, onDeleted, id, onToggleCompleted, completed } =
            this.props;
        let classNames = 'description';

        if (completed) {
            classNames += ' completed';
        }

        const { labelState } = this.state;
        const { edit } = this.state;
        const clazz = edit ? 'editing' : '';

        const result = formatDistanceToNow(date, { includeSeconds: true });

        return (
            <li className={clazz}>
                <form className='' onSubmit={this.onSubmit} id={id}>
                    <input
                        type='text'
                        className='edit'
                        placeholder='Editing task'
                        onChange={this.onLabelChange}
                        value={labelState}
                    />
                </form>
                <div className='view'>
                    <input
                        id={id.toString()}
                        className='toggle'
                        type='checkbox'
                        onChange={onToggleCompleted}
                        checked={completed}
                    />
                    <label htmlFor={id}>
                        <span
                            className={classNames}
                            onClick={onToggleCompleted}
                            aria-hidden='true'
                        >
                            {label}
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
            </li>
        );
    }
}

Task.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onToggleCompleted: PropTypes.func.isRequired,
    onDeleted: PropTypes.func.isRequired,
};
