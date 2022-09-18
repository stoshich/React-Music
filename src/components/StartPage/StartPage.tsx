import React from 'react'
import { Link } from 'react-router-dom'
import MediumButton from '../UI/mediumButton/MediumButton'
import './StartPage.css'

const StartPage = () => {
    return (
        <div className='welcomePage'>
            <div className='welcomePage__text'>
                <p>Connect on React Music</p>
                <p>Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.</p>
            </div>
            <Link to='signUpMenu' className='welcomePage__button'>
                <MediumButton>Sign up now</MediumButton>
            </Link>
        </div>
    )
}

export default StartPage