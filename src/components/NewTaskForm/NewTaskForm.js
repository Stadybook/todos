import React, { Component } from 'react';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {
    constructor() {
        super();
        this.state = {
            label: '',
        };
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value,
        });
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
        const { label } = this.state;

        return (
            <form className='' onSubmit={this.onSubmit}>
                <input
                    className='new-todo'
                    required
                    placeholder='What needs to be done?'
                    onChange={this.onLabelChange}
                    value={label}
                />
            </form>
        );
    }
}
