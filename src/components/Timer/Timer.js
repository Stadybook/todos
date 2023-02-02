/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */

import React, { Component } from 'react';
import { intervalToDuration } from 'date-fns';
import './Timer.css';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: null,
            time: this.props.deadline,
        };
    }

    componentDidMount() {
        const { timer, time } = this.state;
        if (timer === null && typeof time === 'object') {
            if (typeof time === 'object') {
                const duration = intervalToDuration({
                    start: new Date(),
                    end: time,
                });
                this.setState(
                    {
                        time: duration.minutes * 60 + duration.seconds,
                    },
                    () => this.onStart()
                );
            }
        }
    }

    componentWillUnmount() {
        const { changeDeadline } = this.props;
        const { timer, time } = this.state;
        if (timer !== null) {
            const newTime = new Date();
            newTime.setSeconds(newTime.getSeconds() + time);
            changeDeadline(newTime);
        }
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
                clearInterval(counter);
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
