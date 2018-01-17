import { TOGGLE_SIDE_NAV } from '../actions/types';

let initialState = {
    sideNavOpen: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SIDE_NAV:
            // if no action.payload is given, the side nav will close if currently open or open if currently closed
            // if an action.payload is given, set the sideNavOpen property to the value specified
            
            return { 
                ...state, 
                sideNavOpen: action.payload !== undefined ? action.payload : !state.sideNavOpen 
            };

        default:
            return state;
    }
}