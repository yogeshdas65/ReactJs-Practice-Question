import React, { useState } from 'react'

const SignUp = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, phone, email, password)
        localStorage.setItem("name", name)
        localStorage.setItem("phone", phone)
        localStorage.setItem("email", email)
        localStorage.setItem("password" ,password)
    }
    return (
        <>
            <div>SignUp</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <a>Name</a>
                    <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <br />
                    <a>Phone</a>
                    <input type='number' placeholder='Phone No' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <br />
                    <a>Email</a>
                    <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <a>Password</a>
                    <input type='password' placeholder='Password' value={ password} onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <button type='submit' className='text-white  bg-indigo-500'>
                        Submit
                    </button>
                </form>
            </div>

        </>
    )
}

export default SignUp