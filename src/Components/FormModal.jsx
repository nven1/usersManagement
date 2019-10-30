import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addUser, getUsers } from '../Actions/actions';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    first_name: Yup.string()
        .min(1, 'First name must have at least 1 character')
        .max(20, 'First name can\'t have more than 20 characters')
        .required('First name is required'),
    last_name: Yup.string()
        .min(1, 'Last name must have at least 1 character')
        .max(20, 'Last name can\'t have more than 20 characters')
        .required('Last name is required'),
    email: Yup.string()
        .email('Must be a valid email address')
        .max(50, 'Email can\'t have more than 50 characters')
        .required('Email is required'),
    avatar: Yup.string()
        .url('Must be a valid URL')
        .required('Avatar is required')

})

class FormModal extends Component {
    constructor() {
        super();
        this.closeModal = this.closeModal.bind(this);
    }
    render() {
        console.log(this.props)
        return(
            <div className="formModalContainer">
                <div className="formModal">
                    <div className="formHeader">
                        <h2>Add a user</h2>
                    </div>
                    
                    <Formik
                        initialValues = {{
                            id: this.props.total + 1,
                            first_name: '',
                            last_name: '',
                            email: '',
                            avatar: ''
                        }}
                        validationSchema = {validationSchema}
                        onSubmit = {(values, {setSubmitting, resetForm}) => {
                            setSubmitting(true);
                            this.props.addUser(values);
                            resetForm();
                            this.closeModal()
                        }}
                    >
                        {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue}) => (
                            <form className = "formBody" onSubmit = {handleSubmit}>
                                <div className = "formInputsContainer">
                                    <div className = "formInput">
                                        <input 
                                            type = "text"
                                            name = 'first_name'
                                            id = 'first_name'
                                            placeholder = 'First name'
                                            onChange = {handleChange}
                                            onBlur = {handleBlur}
                                            value = {values.first_name}
                                            className = {touched.first_name && errors.first_name ? 'formErrorDialog' : ''}
                                        />
                                        {(touched.first_name && errors.first_name ? 
                                            <div className = "errorTooltip">
                                                {errors.first_name}
                                            </div> : ''
                                        )}
                                        
                                    </div>
                                    <div className = "formInput">
                                        <input 
                                            type = "text"
                                            name = 'last_name'
                                            id = 'last_name'
                                            placeholder = 'Last name'
                                            onChange = {handleChange}
                                            onBlur = {handleBlur}
                                            value = {values.last_name}
                                            className = {touched.last_name && errors.last_name ? 'formErrorDialog' : ''}
                                        />
                                        {(touched.last_name && errors.last_name ? 
                                            <div className = "errorTooltip">
                                                {errors.last_name}
                                            </div> : ''
                                        )}
                                    </div>
                                    <div className = "formInput">
                                        <input 
                                            type = "email"
                                            name = 'email'
                                            id = 'email'
                                            placeholder = 'Email'
                                            onChange = {handleChange}
                                            onBlur = {handleBlur}
                                            value = {values.email}
                                            className = {touched.email && errors.email ? 'formErrorDialog' : ''}
                                        />
                                        {(touched.email && errors.email ? 
                                            <div className = "errorTooltip">
                                                {errors.email}
                                            </div> : ''
                                        )}
                                    </div>
                                    <div className = "formInput">
                                        <input 
                                            type = "url"
                                            name = 'avatar'
                                            id = 'avatar'
                                            placeholder = 'Avatar URL'
                                            onChange = {handleChange}
                                            onBlur = {handleBlur}
                                            value = {values.avatar}
                                            className = {touched.avatar && errors.avatar ? 'formErrorDialog' : ''}
                                        />
                                        {(touched.avatar && errors.avatar ? 
                                            <div className = "errorTooltip">
                                                {errors.avatar}
                                            </div> : ''
                                        )}

                                    </div>
                                </div>
                                <div className="formAvatarPreview">
                                    {(values.avatar ? <img src={values.avatar} alt="No Preview"/> : <span>No Preview</span>)}
                                    
                                    <button 
                                        type = 'button' 
                                        onClick = {() => {
                                            let url = this.props.users[Math.floor(Math.random() * this.props.total)].avatar
                                            setFieldValue('avatar', url);
                                        }}
                                    >
                                        Random Avatar
                                    </button>
                                </div>
                                <div className = "formSubmit">
                                    <button onClick={this.closeModal}>
                                        Cancel
                                    </button>
                                    <button type = "submit" disabled = {isSubmitting}>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        )
    }
    closeModal() {
        this.props.toggleModal()
    }
}

function mapStateToProps(state) {
    return { 
        total: state.usersReducer.total,
        users: state.usersReducer.users
    }
}

export default connect(mapStateToProps, {addUser, getUsers})(FormModal);