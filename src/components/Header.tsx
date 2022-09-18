import React from 'react'
import '../App.css'
import Search from './UI/search/Search'
import MainButton from './UI/headerButton/MainButton'
import LoginBtn from './loginBtn/LoginBtn'
import { Link } from 'react-router-dom'
import Logo from './Logo/Logo'

const Header = () => {
    return (
        <div className='header'>
            <div className="wrapper">
                <div className="header__items">
                    <Link className='header__link' to='/'>
                        <Logo />
                    </Link>
                    <Link className='header__link' to='/'>
                        <MainButton>Home</MainButton>
                    </Link>
                    <Link className='header__link' to='/stream'>
                        <MainButton>Stream</MainButton>
                    </Link>
                    <Link className='header__link' to='/library'>
                        <MainButton>Library</MainButton>
                    </Link>
                    <Search />
                    <LoginBtn />
                </div>
            </div>
        </div>
    )
}

export default Header