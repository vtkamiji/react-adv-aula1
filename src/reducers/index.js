import { combineReducers } from 'redux';
import CommentReducer from './reducer_comments';

const rootReducer = combineReducers({
  comments: CommentReducer
});

export default rootReducer;
