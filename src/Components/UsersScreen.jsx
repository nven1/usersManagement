import React from 'react';

import ToolbarContainer from './ToolbarContainer';
import UsersGrid from './UsersGrid';


class UsersScreen extends React.Component  {
    render() {
        return(
            <div>
                <ToolbarContainer/>
                <UsersGrid/>
            </div>
        )
    }
}



export default (UsersScreen);