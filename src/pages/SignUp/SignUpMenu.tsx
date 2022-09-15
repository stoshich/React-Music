import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { registerPost } from '../../redux/authSlice'
import './SignUpMenu.css'

const SignUpMenu = () => {
    const [pass, setPass] = useState('')
    const [repPass, setRepPass] = useState('')
    const [user, setUser] = useState('')
    const dispatch = useAppDispatch()
    const registerHandler = () => {
        if (pass === repPass) {
            dispatch(registerPost([user, pass]))
            setUser('')
            setPass('')
            setRepPass('')
        } else {
            alert('Пароли должны совпадать!')
        }
    }

    return (
        <div className='wrapper'>
            <div className="signup">
                <h2 className='signup__header'>Registration</h2>
                <input className='signup__input' type="text" placeholder='Username' value={user} onChange={(e) => setUser(e.target.value)} />
                <input className='signup__input' type="password" placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} />
                <input className='signup__input' type="password" placeholder='Repeat password' value={repPass} onChange={(e) => setRepPass(e.target.value)} />
                <button className='signup__button' onClick={registerHandler} >Sign up</button>
            </div>
        </div>
    )
}

export default SignUpMenu