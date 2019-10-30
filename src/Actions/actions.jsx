import axios from 'axios';

export function getUsers() {
    return (dispatch, getState) => {
        let total;
        (getState().usersReducer.total === 0) ? total = 20 : total = getState().usersReducer.total;

        dispatch({type: "USERS_REQUEST"});
        axios.get("https://reqres.in/api/users?per_page=" + total)
            .then((response) => {
                dispatch({type: "USERS_SUCCESS", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "USERS_ERROR", payload: err})
            })
    } 
}

export function addUser(data) {
    return (dispatch, getState) => {
        let user = {
            data: data
        }
        dispatch({type: "USERS_ADD", payload: user});
        this.getUsers();
    }
}

export function searchUsers(query) {
    if (query.length<2) {
        return(dispatch) => dispatch({type:"SEARCH_START"});
    }
    else {
        return (dispatch, getState) => {
            axios.get("https://reqres.in/api/users?per_page=" + getState().usersReducer.total)
                .then((response) => {
                    dispatch({type: "SEARCH_START"})
                    response.data.data.forEach(item => {
                        if (item.first_name.toLowerCase().includes(query.toLowerCase()) || item.last_name.toLowerCase().includes(query.toLowerCase())) {
                            dispatch({type: "SEARCH_ADD", payload: item})
                        }
                    });
                    if (getState().usersReducer.addedUsers.length !== 0) {
                        getState().usersReducer.addedUsers.forEach(item => {
                            if (item.first_name.toLowerCase().includes(query.toLowerCase()) || item.last_name.toLowerCase().includes(query.toLowerCase())) {
                                dispatch({type: "SEARCH_ADD", payload: item})
                            }
                        });
                    }
                    dispatch({type: "SEARCH_SUCCESS"})
                })
                .catch((err) => {
                    dispatch({type: "SEARCH_ERROR", payload: err})
                });
        }
    }


}