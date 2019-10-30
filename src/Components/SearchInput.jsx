import React, {Component} from 'react';
import { connect } from 'react-redux';
import { searchUsers } from '../Actions/actions';
import {Formik, Field} from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class SearchInput extends Component {
    render() {
        return(
            <div className="searchInput">
                <Formik initialValues={{searchQuery: ''}}>
                    {({values, handleChange, setFieldValue}) =>(
                        <div>
                            <Field 
                                type="text"
                                name="searchQuery"
                                id="searchQuery"
                                placeholder="Search"
                                onChange={
                                    (e) => {
                                        this.props.searchUsers(e.target.value);
                                        handleChange(e)
                                    }
                                }
                                value={values.searchQuery}
                            />
                            <button
                                name="cancel"
                                onClick={
                                    e => {
                                        setFieldValue('searchQuery', '');
                                        this.props.searchUsers('');
                                    }
                                }
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    )}
                </Formik>
            </div>
        )
    }
}

export default connect(null, {searchUsers})(SearchInput);