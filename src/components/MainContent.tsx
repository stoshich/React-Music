import React from 'react'
import '../App.css'
import { useAppSelector } from '../hooks'
import StartPage from './StartPage/StartPage'
import MusicByCategory from './UI/musicBox/MusicByCategory'




const MainContent = () => {

    const isAuth = useAppSelector(state => state.auth.isAuth)

    if (!isAuth) return (
        <div className='wrapper'>
            <StartPage />
        </div>
    )

    return (
        <div className='wrapper'>
            <MusicByCategory title='Hot' artistId={16775} />
            {/* <MusicByCategory title='Kendrick Lamar' artistId={1421} /> */}
        </div>
    )
}

export default MainContent