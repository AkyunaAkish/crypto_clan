import { UPDATE_SELECTED_MEMBER } from '../actions/types';

let initialState = {
    selectedMember: 'huey'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_SELECTED_MEMBER:
            return { ...state, selectedMember: action.payload };

        default:
            return state;
    }
}