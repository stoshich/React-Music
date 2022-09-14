import React from 'react'
import '../App.css'
import Search from './UI/search/Search'
import MainButton from './UI/headerButton/MainButton'
import LoginBtn from './loginBtn/LoginBtn'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className="wrapper">
                <div className="header__items">
                    <Link to='/'>
                        <MainButton>Home</MainButton>
                    </Link>
                    <Link to='/stream'>
                        <MainButton>Stream</MainButton>
                    </Link>
                    <Link to='/library'>
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