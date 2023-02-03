/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import './Timer.css';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            existence: false,
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
        this.setState(() => {
            const { timer } = this.state;
            return {
                existence: false,
                timer: clearInterval(timer),
            };
        });
    };

    onStart = () => {
        const { changeDeadline } = this.props;
        const counter = setInterval(() => {
            const { completed } = this.props;
            const { time } = this.state;
            const newTime = time - 1;
            if (completed || newTime < 0) {
                this.setState(() => ({
                    timer: clearInterval(counter),
                    existence: false,
                }));
            } else {
                this.setState(
                    () => ({
                        timer: counter,
                        time: newTime,
                        existence: true,
                    }),
                    () => changeDeadline(this.state.time)
                );
            }
        }, 1000);
    };

    render() {
        const { time, existence } = this.state;
        const btn = !existence ? (
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
