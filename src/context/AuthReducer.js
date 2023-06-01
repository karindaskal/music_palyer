const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            };
        case "LOGIN_FAILURE":
            return {
                user: false,
                isFetching: false,
                error: action.payload
            };
        case "LIKE":
            return {
                ...state,
                user: {
                    ...state.user,
                    favorites: [...state.user.favorites, action.payload]
                }
            };
        case "UNLIKE":
            return {
                ...state,
                user: {
                    ...state.user,
                    favorites: state.user.favorites.filter(songId => songId != action.payload)
                }
            };


        default: return state
    }
}
export default AuthReducer  