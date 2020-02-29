import React, {useState} from 'react';
import './Login.css'
import Logo from '../Assets/logo.png'


function Login(props: any) {
    const [email, setEmail] = useState(localStorage.getItem("email") || "");
    const [password, setPassword] = useState(localStorage.getItem("password") || "");

    function handleSubmit(event: any) {
        event.preventDefault();
        console.log(email);
        if (email === "user@gmail.com" && password === "123") {
            props.userHasAuthenticated(true);
            props.history.push("/home");
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
        } else {
            console.log("authentication is failed");
        }


    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <img className="mylogo" src={Logo} alt="Logo"/>
                <p>LOGIN TO SEE MORE</p>
                <div>
                    <input required
                           value={email}
                           type="email"
                           placeholder="Email*"
                           onChange={event => setEmail(event.target.value)}/>
                </div>
                <div>
                    <input required
                           value={password}
                           type="password"
                           placeholder="Password*"
                           onChange={event => setPassword(event.target.value)}/>
                </div>
                <button type="submit" id="Login">Log In</button>
                {/*<button id="Logout">Log Out</button>*/}
            </form>
        </div>
    )


}

export default Login;
