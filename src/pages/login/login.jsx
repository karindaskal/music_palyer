import { useContext, useRef } from "react"
import "./login.css"
import { loginCall } from "../../apiCalls";
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";


export default function Login() {
    const navigate = useNavigate();

    const [islog, setlog] = useState(false)
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext)


    const handelClick = async (e) => {
        e.preventDefault()
        await loginCall({ email: email.current.value, password: password.current.value }, dispatch)
        //   navigate("/");
        // console.log(localStorage.getItem("token"));



    }
    console.log(user)
    return (
        <div className="login">
            <div className="loginWarpper">
                <div className="loginLeft">
                    <h3 className="loginlogo">otter bit </h3>
                    <span className="loginDesc">
                        listen to music now
                    </span>
                </div>
                <div className="loginRight" onSubmit={handelClick}>
                    <form className="loginBox">
                        <input placeholder="email" type="email" required className="loginInput" ref={email}></input>
                        <input placeholder="password" type="password" required minLength="6" className="loginInput" ref={password}></input>
                        <button className="loginbutton">{isFetching ? "loading" : "logIn"}</button>
                        <button className="loginregisterButton">create new acount</button>
                    </form>



                </div>

            </div>

        </div>
    )
}