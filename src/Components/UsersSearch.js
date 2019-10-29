import React, {Component} from 'react';

import SearchInput from './SearchInput';
import AddUser from './AddUser';

class UsersSearch extends Component {
    render() {
        return(
            <div className="searchBar">
                <SearchInput/>
                <AddUser/>
            </div>
        )
    }
}

export default UsersSearch;