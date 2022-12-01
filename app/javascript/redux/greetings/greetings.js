import { RANDOM_GREETING } from '../actionTypes';

const greeting = (state = {}, action) => {
    switch (action.type) {
        case `${RANDOM_GREETING}/fulfilled`:
            return action.payload;
        default:
            return state;
    }
}

export default greeting;