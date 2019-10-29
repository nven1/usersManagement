import React, {Component} from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import FormModal from './FormModal';
import { addUser, getUsers } from '../Actions/actions';

class AddUser extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        }

        this.showModal = this.showModal.bind(this);
    }
    render() {
        return(
            <div className="addButtonContainer">
                <button onClick={this.showModal}>
                    <FontAwesomeIcon icon={faUserPlus} />
                </button>
                {(this.state.showModal)?<FormModal/>:''}
            </div>
        )
    }

    showModal() {
        //this.setState({showModal: true})
        this.props.addUser()
    }
}

export default connect(null, {addUser, getUsers})(AddUser);