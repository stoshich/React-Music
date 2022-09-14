import '../App.css'
import Search from './UI/search/Search'
import MainButton from './UI/headerButton/MainButton'
import LoginBtn from './loginBtn/LoginBtn'
import { Link } from 'react-router-dom'

const HeaderNoAuth = () => {
    return (
        <div className='header'>
            <div className="wrapper">
                <div className="header__items">
                    <Search />
                    <LoginBtn />
                </div>
            </div>
        </div>
    )
}

export default HeaderNoAuth