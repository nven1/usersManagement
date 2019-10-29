import React, {Component} from 'react';

class UsersGridItem extends Component {
    render() {
        return(
            <div className="usersGridItem">
                <img src={this.props.data.avatar} alt='avatar'/>
                <span>{this.props.data.first_name} <br/> {this.props.data.last_name}</span>
            </div>
        )
    }
}

export default UsersGridItem;