import { UPDATE_SELECTED_MEMBER } from './types';

export default function (member) {
    return {
        type: UPDATE_SELECTED_MEMBER, 
        payload: member
    };
}
