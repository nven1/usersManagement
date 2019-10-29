import React, {Component} from 'react';
import { connect } from 'react-redux';
import { searchUsers } from '../Actions/usersActions';
import {Formik, Field} from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class SearchInput extends Component {
    constructor() {
        super()
        //this.state = { value: 've' };
        this.search = this.search.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    handleChange() {
        console.log(this.props);
    }


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
                                        this.props.searchUsers(e.target.value, this.props.total);
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
                                        this.props.searchUsers('', this.props.total);
                                    }
                                }
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>

                    )}


                </Formik>
                {/* <input type="text" onChange={this.inputHandler}/>
                <button onClick={this.inputHandler} value=''>Test</button> */}
            </div>
        )
    }

    search(query) {
        console.log(this.props);
    }

    inputHandler(e) {
        //this.values({searchQuery:e.target.value})
        this.props.searchUsers(e.target.value);
    }
}

function mapStateToProps(state) {
    //console.log(state);
    return { 
        results: state.searchReducer.matches, 
        total: state.usersReducer.total
    }
}
export default connect(mapStateToProps, {searchUsers})(SearchInput);