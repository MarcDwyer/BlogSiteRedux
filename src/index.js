import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import MainPosts from './components/main_posts';
import NewPost from './components/new_post';
import PostShow from './components/post_show';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/posts/new" component={NewPost} />
        <Route path="/posts/:id" component={PostShow} />
        <Route path="/" component={MainPosts} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
