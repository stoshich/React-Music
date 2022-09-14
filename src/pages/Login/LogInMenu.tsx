import React, { FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { loginPost } from '../../redux/authSlice'

const LogInMenu: FC = () => {
    const [pass, setPass] = useState('')
    const [user, setUser] = useState('')
    const dispatch = useAppDispatch()
    const postReq = () => {
        dispatch(loginPost([user, pass]))
    }
    return (
        <div className='wrapper'>
            <div className="login">
                <h2 className='login__header'>Log In</h2>
                <input type="text" placeholder='Username' value={user} onChange={(e) => setUser(e.target.value)} />
                <input type="password" placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} />
                <button onClick={postReq}>Log in</button>
            </div>
        </div>
    )
}

export default LogInMenu