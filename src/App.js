import Game from './components/Game/Game';
import './App.scss';
import GameProvider from './context/gameContext';
import {gameReducer, initialState} from './reducers/gameReducer/gameReducer';

const App = () => {
    return (
        <GameProvider initialState={initialState} reducer={gameReducer}>
            <Game/>
        </GameProvider>
    )
}

export default App;
