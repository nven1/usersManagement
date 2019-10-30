import React, {Component} from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {withRouter} from 'react-router-dom'

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Must be a valid email address')
        .max(50, 'Email can\'t have more than 50 characters')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must have at least 6 characters')
        .max(50, 'Password can\'t have more than 50 characters')
        .required('Password is required'),
})

class LoginScreen extends Component {
    constructor() {
        super();
        this.closeModal = this.closeModal.bind(this);
    }
    render() {
        return(
            <div className="loginFormContainer">
                    <Formik
                        initialValues = {{
                            email: '',
                            password: ''
                        }}
                        validationSchema = {validationSchema}
                        onSubmit = {() => {
                            this.props.history.push('/home');
                        }}
                    >
                        {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
                            <form className = "loginForm" onSubmit = {handleSubmit}>
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
                                        type = "password"
                                        name = 'password'
                                        id = 'password'
                                        placeholder = 'Password'
                                        onChange = {handleChange}
                                        onBlur = {handleBlur}
                                        value = {values.password}
                                        className = {touched.password && errors.password ? 'formErrorDialog' : ''}
                                    />
                                    {(touched.password && errors.password ? 
                                        <div className = "errorTooltip">
                                            {errors.password}
                                        </div> : ''
                                    )}
                                </div>
                                <div className = "">
                                    <button type = "submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
        )
    }
    closeModal() {
        this.props.toggleModal()
    }
}

export default withRouter(LoginScreen);