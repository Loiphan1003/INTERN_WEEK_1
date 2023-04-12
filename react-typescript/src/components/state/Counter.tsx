import {useReducer} from 'react'

interface CounterState{
    count: number,
}

interface Action{
    payload: number
    type: string,
}

const initalState = { count: 0 };

function reducer(state: CounterState, action: Action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload}
        case 'decrement':
            return { count: state.count - action.payload}
        default:
            return state;
    }
    
}


export const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initalState)

    return (
        <div>
            Count: {state.count}

            <button onClick={() => dispatch({ type: 'increment', payload: 20 })} >
                Increment 20
            </button>

            <button onClick={() => dispatch({ type: 'decrement', payload: 20 })} >
                Decrement 20
            </button>
        </div>
    )
}
