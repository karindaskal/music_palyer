import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";


const INTIAL_STARE = {
    user: null

    ,
    isFetching: false,
    error: null
};
export const AuthContext = createContext(INTIAL_STARE)
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INTIAL_STARE)
    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}>
            {children}

        </AuthContext.Provider>
    )
}