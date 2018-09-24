import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducer from './reducers/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const store = createStore(reducer);

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component/>
      </Provider>
    </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);

/* eslint-disable */
if (module.hot) {
  module.hot.accept(require('./components/App'), () => {
    render(App);
  });
}
/* eslint-enable */
