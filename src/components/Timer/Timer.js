/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

import './Timer.css';

export default class Timer extends Component {
    formatting = (seconds) => {
        return [Math.floor((seconds / 60) % 60), Math.floor(seconds % 60)]
            .join(':')
            .replace(/\b(\d)\b/g, '0$1');
    };

    render() {
        const { timer, onStart, onStop, deadline } = this.props;

        const btn =
            timer === null || timer === undefined ? (
                <button
                    className='icon icon-play'
                    type='button'
                    onClick={onStart}
                />
            ) : (
                <button
                    className='icon icon-pause'
                    type='button'
                    onClick={onStop}
                />
            );

        return (
            <span className='time'>
                {btn}
                {this.formatting(deadline)}
            </span>
        );
    }
}
