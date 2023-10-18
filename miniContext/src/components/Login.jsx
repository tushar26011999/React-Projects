import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <>
    <h1>Login here</h1>
    <input type="text" name="username" onChange={(e)=> setUserName(e.target.value)} placeholder="username" value={username}/>
    {" "}<input type="text" name="password" onChange={(e)=> setPassword(e.target.value)} placeholder="password" value={password}/>
    <button onClick={handleSubmit}>submit</button>
    </>
  )
}

export default Login