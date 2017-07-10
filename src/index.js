import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import CommentBox from './components/comment_box';
import CommentList from './components/comment_list';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={ store }>
    <div>
        <CommentBox />
        <CommentList />
    </div>
  </Provider>
  , document.querySelector('.container'));
