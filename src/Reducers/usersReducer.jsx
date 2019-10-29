export default function usersReducer(state = {
    users: [],
    addedUsers: [],
    total: 0,
    requested: false,
    success: false,
    error: null,
}, action) {
    
    switch (action.type) {
        case "USERS_REQUEST":
            return {...state, requested: true, users: [], total: 0}
        case "USERS_ERROR":
            return {...state, requested: false, error: action.payload}
        case "USERS_SUCCESS":
            return {
                ...state,
                requested: false,
                success: true,
                users: [...action.payload.data, ...state.addedUsers], 
                total: action.payload.total + state.addedUsers.length}
        case "USERS_ADD":
            return {
                ...state,
                addedUsers: [...state.addedUsers, action.payload.data],
            }
        default:
            return state
    }
}