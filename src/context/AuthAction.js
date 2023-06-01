export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
})
export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
})
export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error
})
export const Like = (songId) => ({
    type: "LIKE",
    payload: songId,
})
export const UnLike = (songId) => ({
    type: "UNLIKE",
    payload: songId,
})