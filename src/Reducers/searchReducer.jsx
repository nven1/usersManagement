export default function searchReducer(state = {
    matches: [],
    requested: false,
    success: false,
    error: null
}, action) {
    switch (action.type) {
        case "SEARCH_START":
            return {...state, requested: true, matches: []}
        case "SEARCH_ERROR":
            return {...state, requested: false, error: action.payload}
        case "SEARCH_ADD":
            return {...state, matches: [...state.matches, action.payload]}
        case "SEARCH_SUCCESS":
            return {...state, requested: false, success: true}
        default:
            return state
    }
}