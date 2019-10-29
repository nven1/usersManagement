import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import FormModal from './FormModal';

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
        this.setState({showModal: true})
    }
}

export default AddUser;