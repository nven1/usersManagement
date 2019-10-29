export default function usersReducer(state = {
    users: [],
    total: 0,
    requested: false,
    success: false,
    error: null,
    added: false
}, action) {
    
    switch (action.type) {
        case "USERS_REQUEST":
            return {...state, requested: true, users: [], total: 0}
        case "USERS_ERROR":
            return {...state, requested: false, error: action.payload}
        case "USERS_SUCCESS":
            return {...state, requested: false, success: true, users: action.payload.data, total: action.payload.total}
        case "USERS_ADD":
            return {...state, users: [...state.users, action.payload], added: true}
        default:
                
            return state
    }
}