import "./register.css"
import { Link } from 'react-router-dom';
import { useRef } from "react";
import { RegisterCall } from "../../apiCalls";
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate()
    const handelClick = async (e) => {
        e.preventDefault()
        if (passwordAgain.current.value != password.current.value) {
            password.current.setCustomValidity("password dont match!")
        }
        const user = {
            user_name: username.current.value,
            email: email.current.value,
            password: password.current.value

        }
        try {
            const res = await RegisterCall(user)
            navigate("/login")
        }
        catch (err) {
            console.log(err)
        }

        //  await loginCall({ email: email.current.value, password: password.current.value }, dispatch)
        //   navigate("/");
        // console.log(localStorage.getItem("token"));



    }
    return (
        <div className="login">
            <div className="loginWarpper">
                <div className="loginLeft">
                    <h3 className="loginlogo">otter bit </h3>
                    <span className="loginDesc">
                        listen to music now
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox" onSubmit={handelClick}>
                        <form className="loginBox">
                            <input placeholder="user name" required className="loginInput" ref={username}></input>
                            <input placeholder="email" required className="loginInput" ref={email}></input>
                            <input placeholder="password" required className="loginInput" type="password" ref={password}></input>
                            <input placeholder="password Again" required className="loginInput" type="password" ref={passwordAgain}></input>
                            <button className="loginbutton" type="submit" >sing up</button>
                            <Link to={`/login`} className="loginregisterButton"> login</Link>
                        </form>
                    </div>



                </div>

            </div>

        </div>
    )
}