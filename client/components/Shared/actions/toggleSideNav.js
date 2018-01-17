import { TOGGLE_SIDE_NAV } from './types';

export default function (bool) {
    // a bool can optionally be passed in to set the side nav open or closed explicitly,
    // if no bool is given, the side nav will close if currently open or open if currently closed
    
    return {
        type: TOGGLE_SIDE_NAV, 
        payload: bool
    };
}
