import React, { FC, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { loginPost } from '../../redux/authSlice'
import './LogInMenu.css'

const LogInMenu: FC = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const navigate = useNavigate()
    const [pass, setPass] = useState('')
    const [user, setUser] = useState('')
    const dispatch = useAppDispatch()
    const postReq = () => {
        dispatch(loginPost([user, pass]))
        setPass('')
        setUser('')
    }
    useEffect(() => {
        if (isAuth) navigate('/')
    }, [isAuth])

    return (
        <div className='wrapper'>
            <div className="login">
                <h2 className='login__header'>Log In</h2>
                <input className='login__input' type="text" placeholder='Username' value={user} onChange={(e) => setUser(e.target.value)} />
                <input className='login__input' type="password" placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} />
                <button className='login__button' onClick={postReq}>Log in</button>
            </div>
        </div>
    )
}

export default LogInMenu