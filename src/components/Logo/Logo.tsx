import React from 'react'
import './Logo.css'
import img from '../../assets/soundcloud-svgrepo-com.svg'

const Logo = () => {
    return (
        <div className='logo'>
            <img className='logo__image' src={img} alt="logo" />
            <div className='logo__title'><span className='logo__title-name'>React</span> Music</div>
        </div>
    )
}

export default Logo