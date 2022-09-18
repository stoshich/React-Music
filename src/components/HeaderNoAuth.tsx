import '../App.css'
import Search from './UI/search/Search'
import MainButton from './UI/headerButton/MainButton'
import LoginBtn from './loginBtn/LoginBtn'
import { Link } from 'react-router-dom'
import Logo from './Logo/Logo'

const HeaderNoAuth = () => {
    return (
        <div className='header'>
            <div className="wrapper">
                <div className="header__items-noAuth">
                    <Link className='header__link' to='/'>
                        <Logo />
                    </Link>
                    <Search />
                    <LoginBtn />
                </div>
            </div>
        </div>
    )
}

export default HeaderNoAuth