import _ from 'lodash';
import { FETCH_COMMENTS, ADD_COMMENT } from '../actions/index';

export default function (state = {}, action) {
    switch(action.type) {
        case FETCH_COMMENTS:
            return _.mapKeys(action.payload.data, 'id');
        case ADD_COMMENT:
            return { ...state, [action.payload.data.id]: action.payload.data};
        default:
            return state;
    }
}