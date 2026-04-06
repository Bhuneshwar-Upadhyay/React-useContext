import React, { useState, useContext } from 'react'
import UserContext from '../context/userContext'

const Login = () => {
    const [username, setUserName] = useState(null)
    const [password, setPassword] = useState(null)

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend py-2 px-6 bg-gray-900 rounded-4xl text-xl">Login</legend>

            <label className="label">Email</label>
            <input type="text" className="w-full input" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" className="w-full input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

            <button onClick={handleSubmit} className="btn btn-neutral mt-4">Login</button>
        </fieldset>
    )
}

export default Login