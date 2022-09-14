import React from 'react'
import '../App.css'
import MusicByCategory from './UI/musicBox/MusicByCategory'




const MainContent = () => {

    return (
        <div className='wrapper'>
            <MusicByCategory title='Hot' artistId={16775} />
            {/* <MusicByCategory title='Kendrick Lamar' artistId={1421} /> */}
        </div>
    )
}

export default MainContent