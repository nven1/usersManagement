import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUsers } from '../Actions/actions';

class PageNumber extends Component {
    constructor() {
        super();
        this.changePage = this.changePage.bind(this)
    }
    render() {
        return(
            <button 
                onClick={this.changePage} 
                className={"pageNumber " + (this.props.className ? this.props.className : '')}>
                {this.props.page}
            </button>
        )
    }
    changePage() {
        this.props.changePage(this.props.page)
    }
}

PageNumber.propTypes = {
    page: PropTypes.number,
    className: PropTypes.string
}

export default connect(null, {getUsers})(PageNumber);