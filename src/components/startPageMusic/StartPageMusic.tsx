import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { fetchSongs } from '../../redux/musicBoxSlice'
import MusicItem from '../UI/musicItem/MusicItem'
import classes from './StartPageMusic.module.css'

const StartPageMusic = () => {

    const songsData = useAppSelector(state => state.musicBox.items)
    const dispatch = useAppDispatch()
    const artistId = 16775

    useEffect(() => {
        dispatch(fetchSongs(artistId))
    }, [])

    return (
        <div className={classes.startMusic}>
            <div className={classes.title}>
                Listening right now
            </div>
            <div className={classes.songsBoard}>
                {songsData?.response.songs.map((song, i) => (i < 10) && <MusicItem song={song} key={song.id} />)}
            </div>
        </div>
    )
}

export default StartPageMusic