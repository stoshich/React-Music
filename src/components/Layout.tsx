import React, { FC } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from '../hooks'
import HeaderNoAuth from './HeaderNoAuth'


const Layout: FC = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth)
    return (
        <>
            {isAuth ? <Header /> : <HeaderNoAuth />}
            <Outlet />
        </>
    )
}

export default Layout