import React, {Component} from 'react';
import AppNavigator from './src/containers/AppNavigator';
import store from './src/store/configureStore';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

