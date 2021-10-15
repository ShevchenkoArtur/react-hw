import React from 'react';
import {
    addToHistory,
    setWinner, startNewGame, toggleModalOpener,
    toggleStartGame,
} from '../../reducers/gameReducer/gameActions';
import './Game.scss';
import Board from '../Board/Board';
import RadioSign from '../Board/RadioSign/RadioSign';
import {useGameStore} from '../../context/gameContext';
import {calculateWinner} from '../../utils/calculateWinner';
import StepHistory from './StepHistory/StepHistory';
import PlayerStatus from './PlayerStatus/PlayerStatus';
import {Box, Button} from '@material-ui/core';
import ModalWindow from '../ModalWindow/ModalWindow';


const Game = () => {
    const [state, dispatch] = useGameStore()

    const currentStep = state.history[state.history.length - 1]

    const getSignTurn = () => currentStep.isXTurn ? 'X' : 'O'

    const handleClick = (i) => {
        const squares = [...currentStep.squares]
        squares[i] = getSignTurn()

        dispatch(setWinner(calculateWinner(squares)))
        dispatch(addToHistory(squares))
        dispatch(toggleStartGame(true))
    }

    return (
        <Box className="game">
            <Board squares={currentStep.squares} onClick={handleClick}/>

            <Box ml={3}>
                {
                    !state.isGameStarted &&
                    <Button variant='contained'
                            fullWidth
                            onClick={() => dispatch(toggleModalOpener())}
                    >
                        Add players nicknames
                    </Button>
                }
                {
                    state.modalIsOpen && <ModalWindow/>
                }
                {
                    !state.isGameStarted && <RadioSign/>
                }

                <PlayerStatus/>
                <StepHistory/>

                {
                    state.winner && <Box mt={2}>
                        <Button
                            style={{backgroundColor: 'green', color: '#fff'}}
                            fullWidth
                            variant='contained'
                            onClick={() => dispatch(startNewGame())}
                        >
                            Start new Game
                        </Button>
                    </Box>
                }
            </Box>
        </Box>
    )
}

export default Game;
