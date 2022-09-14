import React from 'react'
import classes from './LoginBtn.module.css'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import { useAppDispatch } from '../../hooks'
import { logout } from '../../redux/authSlice'

const LoginBtn = () => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    return (
        <div className={classes.loginBtn}>
            {isAuth && <div className={classes.loginImg}></div>}
            <Link to='loginMenu'>
                {!isAuth && <button>Log in</button>}
            </Link>
            {isAuth && <button onClick={() => dispatch(logout())}>Log out</button>}
        </div>
    )
}

export default LoginBtn