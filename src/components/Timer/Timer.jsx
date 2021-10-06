import React, {useEffect, useState} from 'react';
import style from './Timer.module.css'
import './../../css/UI/button.css'

const Timer = () => {
    const [time, setTime] = useState(new Date())
    const [tempTime, setTempTime] = useState('00:00:00,000')
    const [times, setTimes] = useState([])
    const [offset, setOffset] = useState(0)
    const [started, setStarted] = useState(false)
    const [stopped, setStopped] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('times')) setTimes(JSON.parse(localStorage.getItem('times')))
    }, [])

    useEffect(() => {
        localStorage.setItem('times', JSON.stringify(times))
    }, [times])

    useEffect(() => {
        let intervalId = setInterval(() => {
            if (started) {
                let ms = offset + (new Date()).getTime() - time.getTime()
                formatTime(ms)
            }
        })

        return () => clearInterval(intervalId)
    }, [started])


    const addZero = (num, size) => num.toString().padStart(size, '0')

    const formatTime = (ms) => {
        const secs = Math.floor((ms / 1000) % 60)
        const mins = Math.floor((ms / 1000 / 60) % 60)
        const hrs = Math.floor((ms / 1000 / 3600) % 24)
        ms = Math.floor(ms % 1000)
        setTempTime(`${addZero(hrs, 2)}:${addZero(mins, 2)}:${addZero(secs, 2)},${addZero(ms, 3)}`)
    }

    const getTimesList = () => times.map((el, idx) => <li key={idx}>{el.time}</li>)

    const start = () => {
        setStarted(true)
        setTime(new Date())
    }

    const stop = () => {
        setStarted(false)
        setStopped(true)
        setOffset(prev => prev += (new Date()).getTime() - time.getTime())
        setTimes(prev => [...prev, {time: tempTime}])
    }

    const reset = () => {
        setTimes(prev => [...prev, {time: tempTime}])
        setTempTime('00:00:00,000')
        setStarted(false)
        setStopped(false)
        setTime(new Date())
        setOffset(0)
    }

    return (
        <div className={style.timer}>
            <h1>{tempTime}</h1>

            <button className={`${stopped ? style.continueBtn : style.startBtn} button`} onClick={start}>
                {stopped ? 'Continue' : 'Start'}
            </button>
            <button className={`${style.stopBtn} button`} onClick={stop} disabled={!started}>Stop</button>
            <button className={`${style.resetBtn} button`} onClick={reset}>Reset</button>

            <ul className={style.list}>
                {getTimesList()}
            </ul>
        </div>
    );
};

export default Timer;