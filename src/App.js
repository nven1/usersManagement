import React from 'react';
import './App.css';
import UsersScreen from './Components/UsersScreen';
import {Provider} from 'react-redux'

import store from './store'



function App() {
  return (
    <Provider store = {store}>
      <div className="container">
        <UsersScreen/>
      </div>
    </Provider>

  );
}

export default App;
