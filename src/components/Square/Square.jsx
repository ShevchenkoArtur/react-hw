import React from 'react';
import './Square.scss';
import {useGameStore} from '../../context/gameContext';

const Square = ({value, onClick}) => {
    const [state, dispatch] = useGameStore()

    const classes = ['btn']

    if (value) {
        classes.push('disabled')
    }

    return (
        <button className={classes.join(' ')} onClick={onClick} disabled={value || state.winner}>
            {value}
        </button>
    )
}

export default Square;