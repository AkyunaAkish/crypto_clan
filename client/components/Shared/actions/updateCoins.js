import { UPDATE_COINS } from './types';

export default function (coins) {
    return {
        type: UPDATE_COINS,
        payload: coins
    };
}
