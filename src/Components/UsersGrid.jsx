import React, {Component} from 'react';
import UsersGridItem from './UsersGridItem';
import { connect } from 'react-redux';
import { getUsers } from '../Actions/actions';
import PageNumber from './PageNumber';


class UsersGrid extends Component {
    constructor() {
        super();
        this.state = {
            page: 1
        }
        this.changePage = this.changePage.bind(this);
    }
    componentDidMount() {
        this.props.getUsers()
    }

    UNSAFE_componentWillReceiveProps() {
        this.changePage(1);
    }

    render() {
        
        let dataComponents;
        let pageNumbers = [
            <PageNumber 
                key = {1} 
                page = {1} 
                changePage = {this.changePage} 
                className = {(this.state.page === 1 ? 'activePageButton' : '')}/>];
        if (this.props.results.length !== 0) {
            dataComponents = this.props.results.map(
                item => <UsersGridItem key={item.id} data={item}/>   
            );
        }
        else {
            dataComponents = this.props.users.map(
                item => <UsersGridItem key={item.id} data={item}/>   
            ); 
        }

        if (this.props.total>6 && this.props.results.length===0) {
            let numberOfPages = Math.ceil(this.props.total/6);
            for (let i = 2; i<=numberOfPages; i++) {
                pageNumbers.push(
                    <PageNumber
                        key={i} 
                        page={i} 
                        changePage={this.changePage}
                        className = {(this.state.page === i ? 'activePageButton' : '')}
                    />
                )
            }
        }
        else if (this.props.results.length>6) {
            let numberOfPages = Math.ceil(this.props.results/6);
            for (let i = 2; i<=numberOfPages; i++) {
                pageNumbers.push(
                    <PageNumber
                        key={i} 
                        page={i} 
                        changePage={this.changePage}
                        className = {(this.state.page === i ? 'activePageButton' : '')}
                    />
                )
            }
        }
        return(
            <div className="usersGridContainer">
                {dataComponents.slice(this.state.page*6-6, this.state.page*6)}
                <div className="pageNumbersContainer">
                    {(pageNumbers.length>1) ? pageNumbers: ''}
                </div>
                
            </div>
        )
    }
    changePage(pageNumber) {
        this.setState({ page: pageNumber});
    }
}

function mapStateToProps(state) {
    return {
        users: state.usersReducer.users,
        results: state.searchReducer.matches,
        total: state.usersReducer.total
    }
}
export default connect(mapStateToProps, {getUsers})(UsersGrid);