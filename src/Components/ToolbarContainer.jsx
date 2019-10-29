import React, {Component} from 'react';

import SearchInput from './SearchInput';
import AddUser from './AddUser';

class ToolbarContainer extends Component {
    render() {
        return(
            <div className="toolbarContainer">
                <SearchInput/>
                <AddUser/>
            </div>
        )
    }
}

export default ToolbarContainer;