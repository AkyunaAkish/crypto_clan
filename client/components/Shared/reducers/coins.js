import { UPDATE_COINS } from '../actions/types';

let initialState = {
    coins: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_COINS:
            return { ...state, coins: action.payload };

        default:
            return state;
    }
}