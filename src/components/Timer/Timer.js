/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './Timer.css';

export default function Timer({ deadline, completed, changeDeadline }) {
    const [existence, changeExistence] = useState(false);
    const [timer, setTimer] = useState(null);
    const [time, countTime] = useState(deadline);

    const formatting = (seconds) => {
        return [Math.floor((seconds / 60) % 60), Math.floor(seconds % 60)]
            .join(':')
            .replace(/\b(\d)\b/g, '0$1');
    };

    const tick = () => {
        if (!existence) return;
        if (completed) {
            setTimer(clearInterval(timer));
        } else if (time === 0) {
            changeExistence(() => false);
            setTimer(clearInterval(timer));
        } else {
            countTime((t) => t - 1);
        }
    };

    useEffect(() => {
        changeDeadline(time);
    }, [time]);

    useEffect(() => {
        const counter = setInterval(() => tick(), 1000);
        return () => clearInterval(counter);
    });

    const onStart = () => changeExistence(() => true);

    const onStop = () => changeExistence(() => false);

    const btn = !existence ? (
        <button
            disabled={!!completed}
            className='icon icon-play'
            type='button'
            onClick={onStart}
        />
    ) : (
        <button
            disabled={!!completed}
            className='icon icon-pause'
            type='button'
            onClick={onStop}
        />
    );

    return (
        <span className='time'>
            {btn}
            {formatting(time)}
        </span>
    );
}
