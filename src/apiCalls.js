import axios from "axios"

export const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("token") };
export const loginCall = async (user, dispatch) => {
    try {
        dispatch({ type: "LOGIN_START" })

        // console.log(user)
        const res = await axios.post("http://localhost:3000/auth/login", user)
        //console.log(res.data.token)
        //console.log(res.data.data)

        console.log("sucsses")
        localStorage.setItem("token", res.data.token);
        console.log(res.data)
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user })



    } catch (err) {
        console.log("fail")

        console.log(err)
        dispatch({ type: "LOGIN_FAILURE", payload: err })

    }

}
export const RegisterCall = async (user) => {

    //  dispatch({ type: "LOGIN_START" })


    const res = await axios.post("http://localhost:3000/auth/register", user)
    // console.log(res.data.token)
    //localStorage.setItem("token", res.data.token);
    // dispatch({ type: "LOGIN_SUCCESS", payload: res.data })




    //  dispatch({ type: "LOGIN_FAILURE", payload: err })



}
export const getfavoriteSongs = async (user) => {
    const res = await axios.get("http://localhost:3000/mangment/song")
    return res;
}
export const getfavoriteArtist = async (user) => {
    const res = await axios.get("http://localhost:3000/mangment/artist")
    return res;
}