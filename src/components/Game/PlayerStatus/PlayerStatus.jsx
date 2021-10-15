import React from 'react';
import {Typography} from '@material-ui/core';
import {useGameStore} from '../../../context/gameContext';

const PlayerStatus = () => {
    const [state, dispatch] = useGameStore()

    const currentStep = state.history[state.history.length - 1]

    const showStatus = () => {
        const player = state.players.nicknames

        if(state.winner === 'Draw') return 'Draw'

        if (player.firstPlayerName && player.secondPlayerName) {
            if (state.winner && state.winner) {
                return `The Winner is ${state.winner === 'X' ? player.firstPlayerName : player.secondPlayerName}`
            } else {
                return `Next player is ${currentStep.isXTurn ? player.firstPlayerName : player.secondPlayerName}`
            }
        } else {
            if (state.winner) {
                return `The Winner is ${state.winner}`
            } else {
                return `Next player is ${currentStep.isXTurn ? 'X' : 'O'}`
            }
        }
    }

    return (
        <Typography
            variant='h6'
            component='p'
            style={{color: '#fff'}}
        >
            {
                showStatus()
            }
        </Typography>
    )
}

export default PlayerStatus;