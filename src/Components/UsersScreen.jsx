import React from 'react';

import ToolbarContainer from './ToolbarContainer';
import UsersGrid from './UsersGrid';
import {Provider} from 'react-redux';

import store from '../store'


class UsersScreen extends React.Component  {
    render() {
        return(
            <div className = "container">
                <Provider store = {store}>
                    <ToolbarContainer/>
                    <UsersGrid/>
                </Provider>
            </div>
        )
    }
}
export default UsersScreen;