import React from 'react';

import UsersSearch from './UsersSearch';
import UsersGrid from './UsersGrid';
/* import { connect } from 'react-redux';
import { getUsers } from '../Actions/usersActions'; */


class UsersScreen extends React.Component  {
    render() {
        return(
            <div>
                <UsersSearch/>
                <UsersGrid/>
            </div>
        )
    }
}



export default (UsersScreen);