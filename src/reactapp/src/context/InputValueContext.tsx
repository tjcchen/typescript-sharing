/**
 * TypeScript Context API
 * - Make a code snippet so you can reuse the code easily
 * 
 * TypeScript Context API
 * - Create AppState and Action type
 * - Create type for the ProviderProps
 * - Add AppState and Action types to the reducer
 * - Optional: remove action destructuring
 * - Set AppState and Action types to createContext
 * - Assign Provider Props to Provider
 * 
 * useReducer is one of the additional Hooks that shipped with React v16.8.
 * An alternative to the useState Hook, useReducer helps you manage complex state logic in React applications.
 * When combined with other Hooks like useContext, useReducer can be a good alternative to Redux, Recoil or MobX.
 * In certain cases, it is an outright better option.
 * 
 * useState is a basic Hook for managing simple state transformation,
 * and useReducer is an additional Hook for managing more complex state logic.
 * However, it’s worth noting that useState uses useReducer internally,
 * implying that you could use useReducer for everything you can do with useState.
 * 
 */

import React, { createContext, useReducer } from "react";

const initialState = {
    inputValue: 0
};

type AppState = typeof initialState;
type Action = 
    | { type: 'SET_INPUT_VALUE', payload: number }
    | { type: 'SET_INPUT_VALUE_TO_100' };

interface InputProviderProps {
    children: React.ReactNode;
}

// we use action to change state
const reducer = (state: AppState, action: Action) => {
    switch (action.type) {
        case 'SET_INPUT_VALUE':
            return {
                ...state,
                inputValue: action.payload
            };
        case 'SET_INPUT_VALUE_TO_100':
            return {
                ...state,
                inputValue: 100
            };
        default:
            return state;
    }
};

const InputValueContext = createContext<{
    state: AppState;
    dispatch: React.Dispatch<Action>
}>({state: initialState, dispatch: () => {}});

function InputValueProvider({ children }: InputProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <InputValueContext.Provider value={{ state, dispatch }}>
            { children }
        </InputValueContext.Provider>
    );
}

export { InputValueProvider, InputValueContext };