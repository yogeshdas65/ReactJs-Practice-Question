import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        if (
            email == localStorage.getItem("email") &&
            password == localStorage.getItem("password")
        ) {
            alert("Login SuccessFull");
        } else {
            alert("Invalid Credential")
        }
    };

    return (
        <>
            <div>Login</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <a>Email</a>
                    <input
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <a>Password</a>
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button type="submit" className="text-white bg-cyan-700">
                        Login
                    </button>
                </form>
            </div>
        </>
    );
}

export default Login;
