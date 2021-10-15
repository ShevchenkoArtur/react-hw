import React, {createContext, useReducer, useContext} from 'react';

const GameContext = createContext()

const GameProvider = ({children, reducer, initialState}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <GameContext.Provider value={[state, dispatch]}>
            {children}
        </GameContext.Provider>
    )
}

export const useGameStore = () => useContext(GameContext)
export default GameProvider;
