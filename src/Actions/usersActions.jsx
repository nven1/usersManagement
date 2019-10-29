import axios from 'axios';



export function getUsers(page) {
    return (dispatch) => {
        console.log(page)
        axios.get("https://reqres.in/api/users?page="+page)
            .then((response) => {
                dispatch({type: "USERS_SUCCESS", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "USERS_ERROR", payload: err})
            })
    } 
}

export function searchUsers(query, total) {
    if (query.length<2) {
        return(dispatch) => dispatch({type:"SEARCH_START"});
    }
    else {
        return (dispatch) => {
            axios.get("https://reqres.in/api/users?per_page=" + total)
                .then((response) => {
                    dispatch({type: "SEARCH_START"})
                    response.data.data.forEach(item => {
                        if (item.first_name.toLowerCase().includes(query.toLowerCase()) || item.last_name.toLowerCase().includes(query.toLowerCase())) {
                            dispatch({type: "SEARCH_ADD", payload: item})
                        }
                    });
                })
                .catch((err) => {
                    dispatch({type: "SEARCH_ERROR", payload: err})
                });
        }
    }


}