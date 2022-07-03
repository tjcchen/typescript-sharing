import { useContext } from 'react';
import { InputValueContext } from './context/InputValueContext';

function App3() {
    // action will be dispatched to reducer
    const { state, dispatch } = useContext(InputValueContext);

    return (
        <>
            <p>Value: { state.inputValue }</p>
            <button onClick={() => dispatch({ type: 'SET_INPUT_VALUE_TO_100' })}>
                SET VALUE TO 100
            </button>
            <button onClick={() => dispatch({ type: 'SET_INPUT_VALUE', payload: 2 })}>
                SET VALUE TO 2
            </button>
        </>
    );
}

export default App3;