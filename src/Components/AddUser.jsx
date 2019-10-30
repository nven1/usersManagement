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

        this.toggleModal = this.toggleModal.bind(this);
    }
    render() {
        return(
            <div className="addButtonContainer">
                <button className = "openModalButton" onClick={this.toggleModal}>
                    <FontAwesomeIcon icon={faUserPlus} />
                </button>
                {(this.state.showModal)?<FormModal toggleModal={this.toggleModal}/>:''}
            </div>
        )
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal})
        //this.props.addUser()
    }
}

export default AddUser;