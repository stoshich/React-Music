import React from 'react'
import classes from './LoginBtn.module.css'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import { useAppDispatch } from '../../hooks'
import { logout } from '../../redux/authSlice'
import SmallButton from '../UI/smallButton/SmallButton'

const LoginBtn = () => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    return (
        <div className={classes.loginBtn}>
            {isAuth && <div className={classes.loginImg}></div>}
            <Link to='loginMenu'>
                {!isAuth && <SmallButton>Log in</SmallButton>}
            </Link>
            <Link to='signUpMenu'>
                {!isAuth && <SmallButton>Sign up</SmallButton>}
            </Link>
            {isAuth && <SmallButton onClick={() => dispatch(logout())}>Log out</SmallButton>}
        </div>
    )
}

export default LoginBtn