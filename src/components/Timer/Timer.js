/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import {
    format,
    intervalToDuration,
    formatDuration,
    formatDistanceToNow,
} from 'date-fns';
import './Timer.css';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: null,
            time: this.props.deadline,
        };
    }

    formatting = (seconds) => {
        return [Math.floor((seconds / 60) % 60), Math.floor(seconds % 60)]
            .join(':')
            .replace(/\b(\d)\b/g, '0$1');
    };

    onStop = () => {
        const { changeDeadline } = this.props;
        this.setState(() => {
            const { timer, time } = this.state;
            const newDeadline = time;
            changeDeadline(newDeadline);
            return {
                timer: clearInterval(timer),
            };
        });
    };

    onStart = () => {
        const counter = setInterval(() => {
            const { completed } = this.props;
            const { time } = this.state;
            if (completed) {
                return;
            }
            const newTime = time - 1;
            if (newTime < 0) {
                clearInterval(counter);
                return;
            }
            this.setState(() => ({
                timer: counter,
                time: newTime,
            }));
        }, 1000);
    };

    render() {
        const { deadline } = this.props;
        const { timer, time } = this.state;
        const btn =
            timer === null || timer === undefined ? (
                <button
                    className='icon icon-play'
                    type='button'
                    onClick={this.onStart}
                />
            ) : (
                <button
                    className='icon icon-pause'
                    type='button'
                    onClick={this.onStop}
                />
            );

        return (
            <span className='time'>
                {btn}
                {this.formatting(time)}
            </span>
        );
    }
}
