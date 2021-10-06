import './App.css';
import Main from './components/Main/Main';
import FormProvider from './context/FormProvider';
import formReducer, {initialState} from './reducers/formReducer/formReducer';

const App = () => {
    return (
        <FormProvider formReducer={formReducer} initialState={initialState}>
            <Main/>
        </FormProvider>
    )
}

export default App;
