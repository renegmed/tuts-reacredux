import { createStore } from 'redux';

const INCREASE_COUNT = 'INCREASE_COUNT';

export const increaseCount = (amount = 1) => ({
    type: INCREASE_COUNT, 
    payload: amount 
});

const DEFAULT_STATE = {
    count: 0,
    nightMode: true,
};

export function reducer(state = DEFAULT_STATE, action = {}) {
    //console.log('reducer is called')
    switch(action.type) {
        case INCREASE_COUNT: 
            //console.log('INCREASE_COUNT action type reducer is called')
            return {
                ...state,
                count: state.count + action.payload,
            };
    }
    return state;
}

export const store = createStore(reducer);  // redux creates the store binding the reducer

